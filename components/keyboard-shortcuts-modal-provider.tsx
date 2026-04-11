"use client"

import { KeyboardShortcutsModalContext } from "@/app/contexts/keyboard-shortcuts-context"
import { Kbd, Modal, useOverlayState } from "@heroui/react"
import { useHotkey } from "@tanstack/react-hotkeys"
import { KeyboardIcon } from "lucide-react"
import { useTranslations } from "next-intl"

export function KeyboardShortcutsModalProvider({
  children,
}: React.PropsWithChildren) {
  const t = useTranslations("component.KeyboardShortcutsModal")
  const state = useOverlayState()

  useHotkey("Mod+;", state.toggle)

  return (
    <KeyboardShortcutsModalContext value={state}>
      {children}

      <Modal>
        <Modal.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
          <Modal.Container>
            <Modal.Dialog className="w-xs">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <KeyboardIcon className="size-5" />
                </Modal.Icon>

                <Modal.Heading>{t("title")}</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                <ul className="space-y-1">
                  <li className="flex items-center justify-between">
                    <span>{t("openKeymap")}</span>
                    <Kbd>
                      <Kbd.Abbr keyValue="ctrl" />
                      <Kbd.Content>;</Kbd.Content>
                    </Kbd>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>{t("switchLocale")}</span>
                    <Kbd>
                      <Kbd.Abbr keyValue="ctrl" />
                      <Kbd.Content>L</Kbd.Content>
                    </Kbd>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>{t("switchTheme")}</span>
                    <Kbd>
                      <Kbd.Abbr keyValue="ctrl" />
                      <Kbd.Content>D</Kbd.Content>
                    </Kbd>
                  </li>
                </ul>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </KeyboardShortcutsModalContext>
  )
}
