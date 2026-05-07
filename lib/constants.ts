import type { Key } from "@tanstack/react-hotkeys"

type KeyMap = Record<string, Key>

export const KEY_MAP = {
  openKeymap: ";",
  switchLocale: "L",
  switchTheme: "D",
  openZalo: "Z",
} as const satisfies KeyMap

type SectionIdMap = Record<string, string>

export const SECTION_ID_MAP = {
  about: `about`,
  experience: `experience`,
  skills: `skills`,
  education: `education`,
  contact: `contact`,
} as const satisfies SectionIdMap

export const EXPERIENCES = ["cosden_code"] as const
