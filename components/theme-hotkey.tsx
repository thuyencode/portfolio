"use client"

import { useHotkey } from "@tanstack/react-hotkeys"
import { useTheme } from "@wrksz/themes/client"

export function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  useHotkey("Mod+D", () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  })

  return null
}
