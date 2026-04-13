import { KeyboardShortcutsModalProvider } from "@/contexts/keyboard-shortcuts-context"

export default function KeyboardShortcutsModalLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <KeyboardShortcutsModalProvider>{children}</KeyboardShortcutsModalProvider>
  )
}
