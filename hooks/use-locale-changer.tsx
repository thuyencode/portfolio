"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { Locale } from "next-intl"

export function useLocaleChanger(locale?: Locale) {
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale() {
    router.replace(pathname, { locale })
  }

  return switchLocale
}
