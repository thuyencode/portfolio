"use client"

import { useKeyboardShortcutsModal } from "@/hooks/use-keyboard-shortcuts-modal"
import { KEY_MAP } from "@/lib/constants"
import { Kbd, Modal } from "@heroui/react"
import { KeyboardIcon } from "lucide-react"
import { useTranslations } from "next-intl"

export function KeyboardShortcutsModal() {
  const t = useTranslations("component.KeyboardShortcutsModal")
  const state = useKeyboardShortcutsModal()

  return (
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
                    <Kbd.Abbr keyValue={KEY_MAP.openKeymap[0]} />
                    <Kbd.Content>{KEY_MAP.openKeymap[1]}</Kbd.Content>
                  </Kbd>
                </li>

                <li className="flex items-center justify-between">
                  <span>{t("switchLocale")}</span>
                  <Kbd>
                    <Kbd.Abbr keyValue={KEY_MAP.switchLocale[0]} />
                    <Kbd.Content>{KEY_MAP.switchLocale[1]}</Kbd.Content>
                  </Kbd>
                </li>

                <li className="flex items-center justify-between">
                  <span>{t("switchTheme")}</span>
                  <Kbd>
                    <Kbd.Abbr keyValue={KEY_MAP.switchTheme[0]} />
                    <Kbd.Content>{KEY_MAP.switchTheme[1]}</Kbd.Content>
                  </Kbd>
                </li>
              </ul>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}
