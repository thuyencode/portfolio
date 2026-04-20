import avatarImage from "@/assets/avatar.jpg"
import cosdenLogoDark from "@/assets/experiences/cosden_solutions_dark_mode.png"
import cosdenLogoLight from "@/assets/experiences/cosden_solutions_light_mode.png"
import { CompanyLogo } from "@/components/company-logo"
import { MarqueeList } from "@/components/marquee-list"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Chip } from "@heroui/react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-dvh space-y-12 py-32">
      <HomeSection />
      <ExperienceSection />
    </main>
  )
}

function HomeSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto flex max-w-4xl items-center justify-center gap-10"
      id={SECTION_ID_MAP.home}
    >
      <div className="space-y-5">
        <h1>{t("name")}</h1>

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
  )
}

function ExperienceSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto h-dvh max-w-6xl space-y-7 px-10"
      id={SECTION_ID_MAP.experience}
    >
      <h2>{t("experienceTitle")}</h2>

      <MarqueeList>
        <CompanyLogo
          lightVariantSrc={cosdenLogoLight}
          darkVariantSrc={cosdenLogoDark}
          alt="Cosden Solutions"
          width={300}
          height={64}
        />
        <CompanyLogo
          lightVariantSrc={`https://placehold.co/300x64/png?font=roboto&text=${encodeURIComponent(t("placeholderText"))}`}
          darkVariantSrc={`https://placehold.co/300x64/png?font=roboto&text=${encodeURIComponent(t("placeholderText"))}`}
          alt="Placeholder 1"
          width={300}
          height={64}
        />
      </MarqueeList>
    </section>
  )
}
