import { Link } from "@/i18n/navigation"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Button, buttonVariants, Drawer, drawerVariants } from "@heroui/react"
import { MenuIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { HashLink } from "./hash-link"

interface DrawerMenuProps {
  buttonProps?: Omit<React.ComponentProps<typeof Button>, "children">
}

export function DrawerMenu({
  children,
  buttonProps,
}: React.PropsWithChildren<DrawerMenuProps>) {
  const t = useTranslations("link")

  return (
    <Drawer>
      <Button isIconOnly {...buttonProps}>
        {children}
        <MenuIcon className="size-4" />
        <span className="sr-only">Navigation</span>
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />

            <nav
              className={drawerVariants().body({
                className: "flex flex-col gap-1",
              })}
            >
              <HashLink href={`#${SECTION_ID_MAP.about}`}>
                {t("about")}
              </HashLink>
              <HashLink href={`#${SECTION_ID_MAP.experience}`}>
                {t("experiences")}
              </HashLink>
              <Link className={buttonVariants({ variant: "ghost" })} href="/">
                {t("projects")}
              </Link>
              <HashLink href={`#${SECTION_ID_MAP.skills}`}>
                {t("skills")}
              </HashLink>
              <HashLink href={`#${SECTION_ID_MAP.education}`}>
                {t("education")}
              </HashLink>
              <HashLink href={`#${SECTION_ID_MAP.contact}`}>
                {t("contact")}
              </HashLink>
            </nav>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  )
}
