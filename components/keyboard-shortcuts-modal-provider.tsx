"use client"

import { KeyboardShortcutsModalContext } from "@/app/contexts/keyboard-shortcuts-context"
import { useOverlayState } from "@heroui/react"
import { useHotkey } from "@tanstack/react-hotkeys"

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
