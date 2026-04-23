"use client"

import { useQueryString } from "@/hooks/use-query-string"
import { KEY_MAP } from "@/lib/constants"
import { Kbd, Modal } from "@heroui/react"
import { useHotkey } from "@tanstack/react-hotkeys"
import { KeyboardIcon } from "lucide-react"
import { useTranslations } from "next-intl"

export function KeyboardShortcutsModal() {
  const t = useTranslations("component.KeyboardShortcutsModal")
  const { hasSaidParam, addToRoute, removeFromRoute } = useQueryString(
    "keymap",
    ""
  )

  useHotkey("Mod+;", () => {
    if (hasSaidParam) {
      removeFromRoute()
    } else {
      addToRoute()
    }
  })

  return (
    <Modal>
      <Modal.Backdrop
        isOpen={hasSaidParam}
        onOpenChange={(isOpen) => {
          if (isOpen) return

          removeFromRoute()
        }}
      >
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
