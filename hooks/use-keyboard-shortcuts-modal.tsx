import { KeyboardShortcutsModalContext } from "@/contexts/keyboard-shortcuts-context"
import { use } from "react"

export function useKeyboardShortcutsModal() {
  const context = use(KeyboardShortcutsModalContext)

  if (context === null) {
    throw new Error(
      "useKeyboardShortcutsModal must be used within a KeyboardShortcutsModalProvider"
    )
  }

  return context
}
