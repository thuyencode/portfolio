import { KeyboardShortcutsModal } from "@/components/keyboard-shortcuts-modal"
import { LocaleHotkey } from "@/components/locale-hotkey"
import { routing } from "@/i18n/routing"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <NextIntlClientProvider>
      <LocaleHotkey />
      <KeyboardShortcutsModal />
      {children}
    </NextIntlClientProvider>
  )
}
