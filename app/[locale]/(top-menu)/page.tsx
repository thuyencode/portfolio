import { useTranslations } from "next-intl"

export default function HomePage() {
  const t = useTranslations("page.Home")

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        {t("title")}
      </div>
    </div>
  )
}
