import * as v from "valibot"

export const ContactFormSchema = v.object({
  contact_email: v.pipe(v.string(), v.email(), v.maxLength(320)),
  contact_name: v.optional(v.pipe(v.string(), v.maxLength(100))),
  contact_subject: v.optional(v.pipe(v.string(), v.maxLength(200))),
  contact_message: v.pipe(v.string(), v.minLength(1), v.maxLength(1000)),
})

export type ContactFormInput = v.InferInput<typeof ContactFormSchema>
