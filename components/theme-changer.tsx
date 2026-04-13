"use client"

import { KEY_MAP } from "@/lib/constants"
import { Button, Dropdown, Kbd, Tooltip } from "@heroui/react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"

export function ThemeChanger({ children }: React.PropsWithChildren) {
  const t = useTranslations("component.ThemeChanger")
  const { theme, setTheme } = useTheme()

  function getButtonLabel() {
    switch (theme) {
      case "light":
        return t("theme.light")
      case "dark":
        return t("theme.dark")
      default:
        return t("theme.system")
    }
  }

  const switchToDarkTheme = () => setTheme("dark")
  const switchToLightTheme = () => setTheme("light")
  const switchToSystemTheme = () => setTheme("system")

  return (
    <Dropdown>
      <Tooltip delay={200}>
        <Button isIconOnly>
          {children}

          <MoonIcon className="hidden size-5 dark:inline-block" />
          <SunIcon className="size-5 dark:hidden" />

          <span className="sr-only" suppressHydrationWarning>
            {getButtonLabel()}
          </span>
        </Button>

        <Tooltip.Content showArrow offset={12}>
          <Tooltip.Arrow />
          <span>
            {t("tooltipPrefix")}{" "}
            <Kbd>
              <Kbd.Abbr keyValue={KEY_MAP.switchTheme[0]} />
              <Kbd.Content>{KEY_MAP.switchTheme[1]}</Kbd.Content>
            </Kbd>{" "}
            {t("tooltipSuffix")}
          </span>
        </Tooltip.Content>
      </Tooltip>

      <Dropdown.Popover className="min-w-30" placement="bottom">
        <Dropdown.Menu>
          <Dropdown.Item onClick={switchToLightTheme}>
            {t("theme.light")}
          </Dropdown.Item>
          <Dropdown.Item onClick={switchToDarkTheme}>
            {t("theme.dark")}
          </Dropdown.Item>
          <Dropdown.Item onClick={switchToSystemTheme}>
            {t("theme.system")}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
