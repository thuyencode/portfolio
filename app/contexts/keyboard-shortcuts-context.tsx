"use client"

import { UseOverlayStateReturn } from "@heroui/react"
import { createContext } from "react"

export const KeyboardShortcutsModalContext =
  createContext<UseOverlayStateReturn | null>(null)
