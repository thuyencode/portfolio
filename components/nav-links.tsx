import { Link } from "@/i18n/navigation"
import { SECTION_ID_MAP } from "@/lib/constants"
import { buttonVariants } from "@heroui/styles"
import { useTranslations } from "next-intl"

export function NavLinks() {
  const t = useTranslations("component.NavLinks")

  return (
    <nav>
      <Link
        className={buttonVariants({ variant: "ghost" })}
        href={SECTION_ID_MAP.home}
      >
        {t("home")}
      </Link>
      <Link
        className={buttonVariants({ variant: "ghost" })}
        href={SECTION_ID_MAP.experience}
      >
        {t("experiences")}
      </Link>
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
