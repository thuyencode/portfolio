import { LocaleChanger } from "@/components/locale-changer"
import { NavLinks } from "@/components/nav-links"
import { PopoutMenu } from "@/components/popout-menu"
import { ThemeChanger } from "@/components/theme-changer"
import { ButtonGroup, ScrollShadow } from "@heroui/react"

export default function TopMenuLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <>
      <header className="fixed inset-x-0 z-10 mx-auto mt-6 flex max-w-5xl items-center justify-between">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            <span>Logo</span>
          </a>
        </div>

        <NavLinks className="glassmorphism flex rounded-3xl px-4 py-2" />

        <ButtonGroup className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LocaleChanger />

          <ThemeChanger>
            <ButtonGroup.Separator />
          </ThemeChanger>

          <PopoutMenu>
            <ButtonGroup.Separator />
          </PopoutMenu>
        </ButtonGroup>
      </header>

      <ScrollShadow className="max-h-dvh scroll-pt-28 scroll-smooth">
        {children}
      </ScrollShadow>
    </>
  )
}
