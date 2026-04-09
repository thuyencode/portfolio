import { Link } from "@/i18n/navigation"
import { buttonVariants } from "@heroui/styles"
import { useTranslations } from "next-intl"

export function NavLinks() {
  const t = useTranslations("component.NavLinks")

  return (
    <nav>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("home")}
      </Link>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("experiences")}
      </Link>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("projects")}
      </Link>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("skills")}
      </Link>
      <Link className={buttonVariants({ variant: "ghost" })} href="/">
        {t("contact")}d
      </Link>
    </nav>
  )
}
