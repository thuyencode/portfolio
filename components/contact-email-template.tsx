import type { ContactFormInput } from "@/schemas"
import { Body, Hr, Html, Link, Section, Text } from "react-email"

interface ContactEmailTemplateProps {
  contactEmail: ContactFormInput["contact_email"]
  contactName: ContactFormInput["contact_name"]
  subject: string
  message: string
}

export default function ContactEmailTemplate({
  contactName,
  contactEmail,
  subject,
  message,
}: ContactEmailTemplateProps) {
  const quotedLines = message
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n")

  const replyBody = `\n\n\nOn ${new Date().toLocaleDateString()}, ${contactName} wrote:\n\n${quotedLines}`

  return (
    <Html>
      <Body>
        <Section>
          <Text>{message}</Text>
        </Section>

        <Hr />

        <Section>
          <Text>
            <Link
              href={`mailto:${contactEmail}?subject=Re: ${encodeURIComponent(subject)}&body=${encodeURIComponent(replyBody)}`}
            >
              Reply to {contactEmail}.
            </Link>
          </Text>
        </Section>
      </Body>
    </Html>
  )
}
