"use client"

import { useLocaleChanger } from "@/hooks/use-locale-changer"
import { Button, Dropdown } from "@heroui/react"
import { Locale, useLocale, useTranslations } from "next-intl"

export function LocaleChanger() {
  const t = useTranslations("component.LanguageSwitcher")
  const locale = useLocale()
  const switchToEnglish = useLocaleChanger("en")
  const switchToVietnamese = useLocaleChanger("vi")

  function getButtonLabel(locale: Locale) {
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
        {getButtonLabel(locale)}
      </Button>

      <Dropdown.Popover className="min-w-fit" placement="bottom">
        <Dropdown.Menu>
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
