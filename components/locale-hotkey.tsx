"use client"

import { useLocaleChanger } from "@/hooks/use-locale-changer"
import { useHotkey } from "@tanstack/react-hotkeys"
import { useLocale } from "next-intl"

export function LocaleHotkey() {
  const locale = useLocale()
  const switchLocale = useLocaleChanger()

  useHotkey("Mod+L", () => {
    switch (locale) {
      case "en":
        return switchLocale("vi")
      case "vi":
        return switchLocale("en")
    }
  })

  return null
}
