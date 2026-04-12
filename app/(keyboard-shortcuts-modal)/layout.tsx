import { KeyboardShortcutsModalProvider } from "@/components/keyboard-shortcuts-modal-provider"

export default function KeyboardShortcutsModalLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <KeyboardShortcutsModalProvider>{children}</KeyboardShortcutsModalProvider>
  )
}
