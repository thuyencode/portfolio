import { getTranslations } from "next-intl/server"

export default async function HomePage() {
  const t = await getTranslations("HomePage")

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        {t("title")}
      </div>
    </div>
  )
}
