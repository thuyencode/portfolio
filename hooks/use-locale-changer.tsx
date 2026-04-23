"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { Locale } from "next-intl"
import { useSearchParams } from "next/navigation"

export function useLocaleChanger() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  function switchLocale(locale?: Locale) {
    router.replace(`${pathname}?${searchParams.toString()}`, {
      locale,
      scroll: false,
    })
  }

  return switchLocale
}
