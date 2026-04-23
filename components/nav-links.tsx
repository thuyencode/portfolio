import { Link } from "@/i18n/navigation"
import { SECTION_ID_MAP } from "@/lib/constants"
import { buttonVariants } from "@heroui/styles"
import { useTranslations } from "next-intl"
import { HashLink } from "./hash-link"

export function NavLinks() {
  const t = useTranslations("component.NavLinks")

  return (
    <nav>
      <HashLink href={`#${SECTION_ID_MAP.home}`}>{t("home")}</HashLink>
      <HashLink href={`#${SECTION_ID_MAP.experience}`}>
        {t("experiences")}
      </HashLink>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("projects")}
      </Link>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("skills")}
      </Link>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("contact")}
      </Link>
    </nav>
  )
}
