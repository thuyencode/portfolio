"use client"

import { useQueryString } from "@/hooks/use-query-string"
import { KEY_MAP } from "@/lib/constants"
import { Kbd, Modal } from "@heroui/react"
import { useHotkey } from "@tanstack/react-hotkeys"
import { KeyboardIcon } from "lucide-react"
import { useTranslations } from "next-intl"

export function KeymapModal() {
  const t = useTranslations("component.KeymapModal")
  const { hasSaidParam, addToRoute, removeFromRoute } = useQueryString(
    "keymap",
    "true"
  )

  useHotkey(";", () => {
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
                    <Kbd.Content>{KEY_MAP.openKeymap}</Kbd.Content>
                  </Kbd>
                </li>

                <li className="flex items-center justify-between">
                  <span>{t("switchLocale")}</span>
                  <Kbd>
                    <Kbd.Content>{KEY_MAP.switchLocale}</Kbd.Content>
                  </Kbd>
                </li>

                <li className="flex items-center justify-between">
                  <span>{t("switchTheme")}</span>
                  <Kbd>
                    <Kbd.Content>{KEY_MAP.switchTheme}</Kbd.Content>
                  </Kbd>
                </li>

                <li className="flex items-center justify-between">
                  <span>{t("showZalo")}</span>
                  <Kbd>
                    <Kbd.Content>{KEY_MAP.openZalo}</Kbd.Content>
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
