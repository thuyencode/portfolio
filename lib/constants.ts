import type { KbdKey } from "@heroui/react"

type KeyMap = Record<string, [KbdKey, string]>

export const KEY_MAP = {
  openKeymap: ["ctrl", ";"],
  switchLocale: ["ctrl", "L"],
  switchTheme: ["ctrl", "D"],
} as const satisfies KeyMap
