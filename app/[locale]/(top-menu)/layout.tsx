import { Link } from "@/i18n/navigation"
import { buttonVariants } from "@heroui/styles"
import { getTranslations } from "next-intl/server"

export default async function TopMenuLayout({
  children,
}: React.PropsWithChildren) {
  const t = await getTranslations("HomePage.Navigation")

  return (
    <>
      <nav className="fixed inset-x-0 top-6 z-10 mx-auto flex w-full max-w-xl justify-center rounded-3xl border border-solid border-background/40 bg-background/50 p-3 shadow-lg backdrop-blur-lg">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          {t("home")}
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          {t("contact")}
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          {t("projects")}
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          {t("skills")}
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          {t("experiences")}
        </Link>
      </nav>

      {children}
    </>
  )
}
