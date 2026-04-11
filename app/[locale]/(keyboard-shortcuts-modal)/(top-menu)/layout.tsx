import { LocaleChanger } from "@/components/locale-changer"
import { NavLinks } from "@/components/nav-links"
import { PopoutMenu } from "@/components/popout-menu"
import { ThemeChanger } from "@/components/theme-changer"
import { ButtonGroup } from "@heroui/react"

export default function TopMenuLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <>
      <div className="fixed inset-x-0 top-6 z-10 h-min">
        <div className="glassmorphism absolute inset-x-0 mx-auto flex w-full max-w-xl justify-center rounded-3xl p-3">
          <NavLinks />
        </div>

        <div className="absolute right-32 flex items-center rounded-3xl p-3">
          <ButtonGroup>
            <LocaleChanger />

            <ThemeChanger>
              <ButtonGroup.Separator />
            </ThemeChanger>

            <PopoutMenu>
              <ButtonGroup.Separator />
            </PopoutMenu>
          </ButtonGroup>
        </div>
      </div>

      {children}
    </>
  )
}
