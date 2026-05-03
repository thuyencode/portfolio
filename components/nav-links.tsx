import { Link } from "@/i18n/navigation"
import { SECTION_ID_MAP } from "@/lib/constants"
import { buttonVariants } from "@heroui/styles"
import { useTranslations } from "next-intl"
import { HashLink } from "./hash-link"

export function NavLinks() {
  const t = useTranslations("component.NavLinks")

  return (
    <nav className="space-x-1">
      <HashLink href={`#${SECTION_ID_MAP.about}`}>{t("about")}</HashLink>
      <HashLink href={`#${SECTION_ID_MAP.experience}`}>
        {t("experiences")}
      </HashLink>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("projects")}
      </Link>
      <HashLink href={`#${SECTION_ID_MAP.skills}`}>{t("skills")}</HashLink>
      <HashLink href={`#${SECTION_ID_MAP.contact}`}>{t("contact")}</HashLink>
    </nav>
  )
}
