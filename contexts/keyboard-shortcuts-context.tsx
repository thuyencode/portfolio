"use client"

import { useOverlayState, UseOverlayStateReturn } from "@heroui/react"
import { useHotkey } from "@tanstack/react-hotkeys"
import { createContext } from "react"

export const KeyboardShortcutsModalContext =
  createContext<UseOverlayStateReturn | null>(null)

export function KeyboardShortcutsModalProvider({
  children,
}: React.PropsWithChildren) {
  const state = useOverlayState()

  useHotkey("Mod+;", state.toggle)

  return (
    <KeyboardShortcutsModalContext value={state}>
      {children}
    </KeyboardShortcutsModalContext>
  )
}
