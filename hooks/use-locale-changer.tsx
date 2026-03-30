"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { Locale } from "next-intl"

export function useLocaleChanger() {
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale(locale?: Locale) {
    router.replace(pathname, { locale })
  }

  return switchLocale
}
