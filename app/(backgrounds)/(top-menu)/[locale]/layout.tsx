import { routing } from "@/i18n/routing"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
  )
}
