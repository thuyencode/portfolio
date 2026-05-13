"use client"

import { Link, usePathname } from "@/i18n/navigation"
import { KEY_MAP } from "@/lib/constants"
import { buttonVariants, Kbd } from "@heroui/react"
import { DownloadIcon } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

export function AboutButtons() {
  const t = useTranslations("page.Home")
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <span className="mt-2.5 space-x-2.5">
      <a
        className={buttonVariants()}
        href={
          locale === "en"
            ? process.env.NEXT_PUBLIC_MY_EN_CV
            : process.env.NEXT_PUBLIC_MY_VI_CV
        }
        download="Tran Van Thuyen's CV.pdf"
        target="_blank"
      >
        {t("downloadCv")} <DownloadIcon />
      </a>
      <Link
        className={buttonVariants({ variant: "ghost" })}
        href={{ pathname, query: { keymap: "true" } }}
      >
        {t("viewShortcuts")}
        <Kbd>
          <Kbd.Content>{KEY_MAP.openKeymap}</Kbd.Content>
        </Kbd>
      </Link>
    </span>
  )
}
