"use client"

import { useKeyboardShortcutsModal } from "@/hooks/use-keyboard-shortcuts-modal"
import { KEY_MAP } from "@/lib/constants"
import { Button, Dropdown, Kbd } from "@heroui/react"
import { MenuIcon } from "lucide-react"
import { useTranslations } from "next-intl"

export function PopoutMenu({ children }: React.PropsWithChildren) {
  const t = useTranslations("component.PopoutMenu")
  const { open } = useKeyboardShortcutsModal()

  return (
    <Dropdown>
      <Button isIconOnly>
        {children}
        <MenuIcon className="size-4" />
        <span className="sr-only">{t("srOnly")}</span>
      </Button>

      <Dropdown.Popover placement="bottom right">
        <Dropdown.Menu>
          <Dropdown.Item className="justify-between" onClick={open}>
            <span>{t("keyboardShortcuts")}</span>
            <Kbd>
              <Kbd.Abbr keyValue={KEY_MAP.openKeymap[0]} />
              <Kbd.Content>{KEY_MAP.openKeymap[1]}</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
