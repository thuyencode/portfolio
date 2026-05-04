"use server"

import ContactEmailTemplate from "@/components/contact-email-template"
import { parseFormData } from "@/lib/utils"
import { type ContactFormInput, ContactFormSchema } from "@/schemas"
import { getLocale } from "next-intl/server"
import { Resend } from "resend"
import { FlatErrors, flatten, safeParse } from "valibot"

const resend = new Resend(process.env.RESEND_API_KEY!)

type SubmitContactFormReturn = {
  success: boolean
  errors?: FlatErrors<typeof ContactFormSchema>
  fields: ContactFormInput
} | null

export async function submitContactFormAction(
  _prevState: unknown,
  payload: FormData
): Promise<SubmitContactFormReturn> {
  const locale = await getLocale()

  const fields = parseFormData<ContactFormInput>(payload)
  const result = safeParse(ContactFormSchema, fields, { lang: locale })

  if (result.issues) {
    const flattened = flatten<typeof ContactFormSchema>(result.issues)

    return { success: false, errors: flattened, fields }
  }

  const from = result.output.contact_name
    ? `${result.output.contact_name} <${process.env.RESEND_EMAIL_FROM}>`
    : process.env.RESEND_EMAIL_FROM

  const subject =
    result.output.contact_subject ?? result.output.contact_message.slice(0, 20)

  try {
    const { error } = await resend.emails.send({
      from,
      to: process.env.MY_EMAIL,
      subject,
      react: ContactEmailTemplate({
        contactName: result.output.contact_name,
        contactEmail: result.output.contact_email,
        subject,
        message: result.output.contact_message,
      }),
    })

    if (error) {
      return {
        success: false,
        errors: { root: [error.message] },
        fields: result.output,
      }
    }
  } catch (error: unknown) {
    return {
      success: false,
      errors: {
        root: [error instanceof Error ? error.message : String(error)],
      },
      fields: result.output,
    }
  }

  return { success: true, fields: result.output }
}
