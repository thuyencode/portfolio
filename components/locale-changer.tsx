"use client"

import { useLocaleChanger } from "@/hooks/use-locale-changer"
import { Button, Dropdown } from "@heroui/react"
import { motion } from "motion/react"
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
      <Button variant="primary">
        <motion.span
          key={locale}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {getButtonLabel()}
        </motion.span>

        <span className="sr-only">{t(`languageCode.${locale}`)}</span>
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
