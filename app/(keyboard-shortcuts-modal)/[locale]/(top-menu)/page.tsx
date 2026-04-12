import avatarImage from "@/assets/avatar.jpg"
import { Chip } from "@heroui/react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HomePage() {
  const t = useTranslations("page.Home")

  return (
    <main>
      <section className="mx-auto flex h-dvh max-w-4xl items-center justify-center gap-10">
        <div className="space-y-5">
          <h2>{t("name")}</h2>

          <p className="text-xl font-semibold tracking-wide text-accent capitalize italic underline underline-offset-[6px]">
            {t("jobTitle")}
          </p>

          <p className="leading-8 font-medium">
            {t("descriptionBeforeJs")}

            <Chip variant="primary" color="warning">
              <Chip.Label className="text-base text-accent-foreground">
                JavaScript
              </Chip.Label>
            </Chip>

            {t("descriptionBetweenJsTs")}

            <Chip variant="primary" color="accent">
              <Chip.Label className="text-base text-accent-foreground">
                TypeScript
              </Chip.Label>
            </Chip>

            {t("descriptionBetweenTsReact")}

            <Chip variant="primary" color="accent">
              <Chip.Label className="text-base text-accent-foreground">
                React
              </Chip.Label>
            </Chip>

            {t("descriptionAfterReact")}
          </p>
        </div>
        <Image
          src={avatarImage}
          alt="A picture of me"
          width={400}
          className="h-auto rounded-3xl shadow-lg"
          loading="eager"
        />
      </section>
    </main>
  )
}
