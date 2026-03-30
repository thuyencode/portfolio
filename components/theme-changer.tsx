"use client"

import { Button, Dropdown } from "@heroui/react"
import { MoonIcon, SunIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"

const SunIconWithMotion = motion.create(SunIcon)
const MoonIconWithMotion = motion.create(MoonIcon)

export function ThemeChanger({ children }: React.PropsWithChildren) {
  const t = useTranslations("component.ThemeChanger")
  const { theme, resolvedTheme, setTheme } = useTheme()

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
      <Button variant="primary">
        {children}

        <AnimatePresence>
          {resolvedTheme === "dark" ? (
            <MoonIconWithMotion
              className="size-5"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
            />
          ) : (
            <SunIconWithMotion
              className="size-5"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
            />
          )}
        </AnimatePresence>

        <span className="sr-only" suppressHydrationWarning>
          {getButtonLabel()}
        </span>
      </Button>

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
