"use client"

import { useLocaleChanger } from "@/hooks/use-locale-changer"
import { Button, Dropdown, Kbd, Tooltip } from "@heroui/react"
import { useLocale, useTranslations } from "next-intl"

export function LocaleChanger() {
  const t = useTranslations("component.LanguageSwitcher")
  const locale = useLocale()
  const switchLocale = useLocaleChanger()

  function getButtonLabel() {
    const flagEmoji = {
      en: "🇬🇧",
      vi: "🇻🇳",
    }[locale]

    return flagEmoji
  }

  const switchToEnglish = () => switchLocale("en")
  const switchToVietnamese = () => switchLocale("vi")

  return (
    <Dropdown>
      <Tooltip delay={200}>
        <Button variant="primary" isIconOnly>
          <span key={locale}>{getButtonLabel()}</span>
          <span className="sr-only">{t(`languageCode.${locale}`)}</span>
        </Button>

        <Tooltip.Content showArrow offset={12}>
          <Tooltip.Arrow />
          <span>
            {t("tooltipPrefix")}{" "}
            <Kbd>
              <Kbd.Abbr keyValue="ctrl" />
              <Kbd.Content>L</Kbd.Content>
            </Kbd>{" "}
            {t("tooltipSuffix")}
          </span>
        </Tooltip.Content>
      </Tooltip>

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
