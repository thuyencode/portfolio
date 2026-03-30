import { LocaleChanger } from "@/components/locale-changer"
import { NavLinks } from "@/components/nav-links"

export default function TopMenuLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <>
      <div className="fixed inset-x-60 top-6 z-10 h-min">
        <div className="liquid-glass absolute inset-x-0 mx-auto flex w-full max-w-xl justify-center rounded-3xl p-3">
          <NavLinks />
        </div>

        <div className="absolute right-0 rounded-3xl p-3">
          <LocaleChanger />
        </div>
      </div>

      {children}
    </>
  )
}
