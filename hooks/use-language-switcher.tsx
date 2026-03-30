"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { Locale } from "next-intl"

export function useLanguageSwitcher(locale?: Locale) {
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale() {
    router.replace(pathname, { locale })
  }

  return switchLocale
}
