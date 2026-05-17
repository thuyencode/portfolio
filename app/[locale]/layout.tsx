import { LocaleHotkey } from "@/components/locale-hotkey"
import { routing } from "@/i18n/routing"
import { cn } from "@heroui/react"
import { Metadata } from "next"
import type { Locale } from "next-intl"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Geist_Mono, Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }

  const t = await getTranslations({ locale, namespace: "page.Home" })

  return {
    title: `${t("name")} - ${t("jobTitle")}`,
    description: `${t("jobTitle")} ${t("aboutHas")} ${t("aboutExperience")}${t("aboutCollaboratingWith")}${t("aboutRealProjects")}${t("aboutFocusedOn")}${t("aboutTsReact")}.`,
    keywords: t.raw("keywords") as string[],
    metadataBase: process.env.DOMAIN,
  }
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
        inter.variable
      )}
    >
      <body className="relative bg-background">
        <NextIntlClientProvider>
          <Suspense fallback={null}>
            <LocaleHotkey />
          </Suspense>
          {children}
        </NextIntlClientProvider>
        <Background />
      </body>
    </html>
  )
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10 max-h-dvh bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_0%,color-mix(in_srgb,var(--color-border)_30%,transparent)_40%,var(--color-border)_70%,var(--color-border)_100%)] mask-[url(/assets/backgrounds/plus.svg)] bg-repeat" />
  )
}
