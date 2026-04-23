import { LocaleHotkey } from "@/components/locale-hotkey"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { Geist_Mono, Inter, Nunito_Sans } from "next/font/google"
import { notFound } from "next/navigation"
import "../globals.css"

const nunitoSansHeading = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        nunitoSansHeading.variable,
        "scroll-pt-32 scroll-smooth"
      )}
    >
      <body className="relative bg-background">
        <NextIntlClientProvider>
          <LocaleHotkey />
          {children}
        </NextIntlClientProvider>
        {/*<Background />*/}
      </body>
    </html>
  )
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10 max-h-dvh bg-radial from-sky-300 via-background to-background backdrop-blur-lg dark:from-sky-950 dark:via-background dark:to-background" />
  )
}
