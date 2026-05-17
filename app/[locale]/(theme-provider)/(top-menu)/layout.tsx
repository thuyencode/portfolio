import { DrawerMenu } from "@/components/drawer-menu"
import { DropdownMenu } from "@/components/dropdown-menu"
import { HashLink } from "@/components/hash-link"
import {
  LocaleChanger,
  LocaleChangerSkeleton,
} from "@/components/locale-changer"
import { ThemeChanger } from "@/components/theme-changer"
import { SECTION_ID_MAP } from "@/lib/constants"
import { ButtonGroup, ScrollShadow } from "@heroui/react"
import { type Locale, useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { Suspense, use } from "react"

export default function TopMenuLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = use(params)

  setRequestLocale(locale as Locale)

  const t = useTranslations("link")

  return (
    <>
      <header className="fixed inset-x-0 z-10 mx-auto mt-6 flex max-w-5xl items-center justify-between max-md:px-4">
        <div className="invisible lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span>Logo</span>
          </a>
        </div>

        <nav className="glassmorphism flex space-x-1 rounded-3xl px-4 py-2 max-md:hidden">
          <HashLink isButton href={`#${SECTION_ID_MAP.about}`}>
            {t("about")}
          </HashLink>
          <HashLink isButton href={`#${SECTION_ID_MAP.experience}`}>
            {t("experiences")}
          </HashLink>

          <HashLink isButton href={`#${SECTION_ID_MAP.skills}`}>
            {t("skills")}
          </HashLink>
          <HashLink isButton href={`#${SECTION_ID_MAP.education}`}>
            {t("education")}
          </HashLink>
          <HashLink isButton href={`#${SECTION_ID_MAP.contact}`}>
            {t("contact")}
          </HashLink>
        </nav>

        <ButtonGroup className="flex flex-1 justify-end">
          <Suspense fallback={<LocaleChangerSkeleton />}>
            <LocaleChanger />
          </Suspense>

          <ThemeChanger>
            <ButtonGroup.Separator />
          </ThemeChanger>

          <DropdownMenu
            buttonProps={{ className: "max-md:hidden md:rounded-r-full" }}
          >
            <ButtonGroup.Separator />
          </DropdownMenu>

          <DrawerMenu
            buttonProps={{ className: "md:hidden max-md:rounded-r-full" }}
          >
            <ButtonGroup.Separator />
          </DrawerMenu>
        </ButtonGroup>
      </header>

      <ScrollShadow className="max-h-dvh scroll-pt-28 scroll-smooth">
        {children}
      </ScrollShadow>
    </>
  )
}
