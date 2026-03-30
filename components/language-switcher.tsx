"use client"

import { useLanguageSwitcher } from "@/hooks/use-language-switcher"
import { Button, Dropdown } from "@heroui/react"
import { useLocale, useTranslations } from "next-intl"

export function LanguageSwitcher() {
  const locale = useLocale()
  const t = useTranslations("component.LanguageSwitcher")
  const switchToDefault = useLanguageSwitcher()
  const switchToEnglish = useLanguageSwitcher("en")
  const switchToVietnamese = useLanguageSwitcher("vi")

  function getButtonLabel() {
    const flagEmoji =
      {
        en: "🇬🇧",
        vi: "🇻🇳",
      }[locale] || "🌐"

    return `${t(`languageCode.${locale}`)} ${flagEmoji}`
  }

  return (
    <Dropdown>
      <Button variant="primary" className="">
        {getButtonLabel()}
      </Button>

      <Dropdown.Popover className="min-w-fit" placement="bottom">
        <Dropdown.Menu>
          <Dropdown.Item onClick={switchToDefault}>
            {t("languageName.default")} 🌐
          </Dropdown.Item>
          <Dropdown.Item onClick={switchToEnglish}>
            {t("languageName.english")} 🇬🇧
          </Dropdown.Item>
          <Dropdown.Item onClick={switchToVietnamese}>
            {t("languageName.vietnamese")} 🇻🇳
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}
