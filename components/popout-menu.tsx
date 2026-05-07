"use client"

import { Link, usePathname } from "@/i18n/navigation"
import { KEY_MAP } from "@/lib/constants"
import { Button, Dropdown, Kbd } from "@heroui/react"
import { MenuIcon } from "lucide-react"
import { useTranslations } from "next-intl"

export function PopoutMenu({ children }: React.PropsWithChildren) {
  const pathname = usePathname()
  const t = useTranslations("component.PopoutMenu")

  return (
    <Dropdown>
      <Button isIconOnly>
        {children}
        <MenuIcon className="size-4" />
        <span className="sr-only">{t("srOnly")}</span>
      </Button>

      <Dropdown.Popover placement="bottom right">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link
              className="flex grow items-center justify-between"
              href={{ pathname, query: { keymap: "true" } }}
              scroll={false}
            >
              <span>{t("keyboardShortcuts")}</span>
              <Kbd className="ml-auto">
                <Kbd.Content>{KEY_MAP.openKeymap}</Kbd.Content>
              </Kbd>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
