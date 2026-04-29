import type { KbdKey } from "@heroui/react"

type KeyMap = Record<string, [KbdKey, string]>

export const KEY_MAP = {
  openKeymap: ["alt", ";"],
  switchLocale: ["alt", "L"],
  switchTheme: ["alt", "D"],
} as const satisfies KeyMap

type SectionIdMap = Record<string, string>

export const SECTION_ID_MAP = {
  about: `about`,
  experience: `experience`,
  skills: `skills`,
} as const satisfies SectionIdMap

export const EXPERIENCES = ["cosden_code"] as const
