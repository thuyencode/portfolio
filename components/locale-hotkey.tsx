"use client"

import { useLocaleChanger } from "@/hooks/use-locale-changer"
import { useLocale } from "next-intl"
import { useEffect, useEffectEvent } from "react"

export function LocaleHotkey() {
  const locale = useLocale()
  const switchLocale = useLocaleChanger()

  const onKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === "l") {
      switch (locale) {
        case "en":
          return switchLocale("vi")
        case "vi":
          return switchLocale("en")
      }
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  return null
}
