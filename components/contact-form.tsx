"use client"

import { submitContactFormAction } from "@/actions/contact"
import {
  Alert,
  Button,
  ErrorMessage,
  Input,
  Label,
  Spinner,
  surfaceVariants,
  TextArea,
} from "@heroui/react"
import { SendIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useActionState } from "react"
import { FieldError } from "./field-error"

export function ContactForm() {
  const t = useTranslations("component.ContactForm")
  const [state, action, isPending] = useActionState(
    (_prevState: unknown, payload: FormData | null) => {
      if (payload === null) {
        return null
      }

      return submitContactFormAction(_prevState, payload)
    },
    null
  )

  const rootErrors = state?.errors?.root
  const emailErrors = state?.errors?.nested?.contact_email
  const nameErrors = state?.errors?.nested?.contact_name
  const subjectErrors = state?.errors?.nested?.contact_subject
  const messageErrors = state?.errors?.nested?.contact_message
  const handleReset = () => action(null)

  return (
    <form
      action={action}
      className={surfaceVariants({ className: "space-y-5 rounded-3xl p-5" })}
    >
      <div className="flex flex-col gap-1">
        <Label htmlFor="contact_email" className="text-base" isRequired>
          {t("emailLabel")}
        </Label>
        <Input
          id="contact_email"
          name="contact_email"
          type="email"
          defaultValue={state?.fields?.contact_email || ""}
          aria-invalid={!!emailErrors}
          variant="secondary"
          className="peer"
          required
        />

        <ErrorMessage className="hidden peer-aria-invalid:inline">
          <FieldError errors={emailErrors} />
        </ErrorMessage>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="contact_name" className="text-base">
          {t("nameLabel")}
        </Label>
        <Input
          id="contact_name"
          name="contact_name"
          type="text"
          defaultValue={state?.fields?.contact_name || ""}
          aria-invalid={!!nameErrors}
          variant="secondary"
          className="peer"
          maxLength={100}
        />
        <ErrorMessage className="hidden peer-aria-invalid:inline">
          <FieldError errors={nameErrors} />
        </ErrorMessage>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="contact_subject" className="text-base">
          {t("subjectLabel")}{" "}
          <span className="text-muted">{t("subjectOptional")}</span>
        </Label>
        <Input
          id="contact_subject"
          name="contact_subject"
          type="text"
          defaultValue={state?.fields?.contact_subject || ""}
          aria-invalid={!!subjectErrors}
          placeholder={t("subjectPlaceholder")}
          variant="secondary"
          className="peer"
          maxLength={200}
        />
        <ErrorMessage className="hidden peer-aria-invalid:inline">
          <FieldError errors={subjectErrors} />
        </ErrorMessage>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="contact_message" className="text-base" isRequired>
          {t("messageLabel")}
        </Label>
        <TextArea
          id="contact_message"
          name="contact_message"
          className="peer min-h-32"
          defaultValue={state?.fields?.contact_message || ""}
          aria-invalid={!!messageErrors}
          variant="secondary"
          required
          minLength={1}
          maxLength={1000}
        />
        <ErrorMessage className="hidden peer-aria-invalid:inline">
          <FieldError errors={messageErrors} />
        </ErrorMessage>
      </div>

      <FormSuccessAlert hide={!state?.success || isPending} />
      <FormRootErrorAlert rootErrors={rootErrors} hide={isPending} />

      <div className="flex gap-2">
        <Button className="grow" type="submit" isDisabled={isPending}>
          {isPending ? <Spinner color="current" /> : <SendIcon />}
          {isPending ? t("sending") : t("send")}
        </Button>
        <Button
          className="grow"
          variant="secondary"
          type="reset"
          onClick={handleReset}
          isDisabled={isPending}
        >
          {t("reset")}
        </Button>
      </div>
    </form>
  )
}

function FormRootErrorAlert({
  rootErrors,
  hide,
}: {
  rootErrors: string[] | undefined
  hide?: boolean
}) {
  const t = useTranslations("component.ContactForm")

  if (!rootErrors || hide) {
    return null
  }

  return (
    <Alert status="danger" className="bg-default">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{t("errorTitle")}</Alert.Title>
        <Alert.Description>
          {t("errorDescription")}
          <FieldError errors={rootErrors} />
        </Alert.Description>

        <Button
          className="mt-2 sm:hidden"
          size="sm"
          variant="danger"
          type="submit"
        >
          {t("retry")}
        </Button>
      </Alert.Content>

      <Button
        className="hidden sm:block"
        size="sm"
        variant="danger"
        type="submit"
      >
        {t("retry")}
      </Button>
    </Alert>
  )
}

function FormSuccessAlert({ hide }: { hide?: boolean }) {
  const t = useTranslations("component.ContactForm")

  if (hide) {
    return null
  }

  return (
    <Alert status="success" className="bg-default">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{t("successTitle")}</Alert.Title>
        <Alert.Description>{t("successDescription")}</Alert.Description>
      </Alert.Content>
    </Alert>
  )
}
