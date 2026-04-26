import { Blockquote } from "@/components/blockquote"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import { CompanyLogo } from "@/components/company-logo"
import { KeymapModal } from "@/components/keymap-modal"
import { Marquee } from "@/components/marquee"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Chip } from "@heroui/react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <main className="min-h-dvh scroll-smooth px-10">
        <HomeSection />
        <ExperienceSection />
      </main>

      <KeymapModal />
    </>
  )
}

function HomeSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto flex max-w-4xl items-center justify-center gap-10 pt-28"
      id={SECTION_ID_MAP.home}
    >
      <div className="space-y-5">
        <h1 className="uppercase">{t("name")}</h1>

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
        src={`/assets/avatar.jpg`}
        alt="A picture of me"
        width={400}
        height={450}
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
      className="mx-auto h-dvh max-w-6xl pt-28"
      id={SECTION_ID_MAP.experience}
    >
      <h2 className="text-center text-2xl tracking-wide uppercase">
        {t("experienceTitle")}
      </h2>

      <Marquee className="mt-10 mb-14 [--duration:15s]">
        <CompanyLogo
          lightVariantSrc={`/assets/experiences/cosden_solutions_light_mode.png`}
          darkVariantSrc={`/assets/experiences/cosden_solutions_dark_mode.png`}
          alt="Cosden Solutions"
          width={245}
          height={64}
        />
        <CompanyLogo
          lightVariantSrc={`https://placehold.co/300x64/png?font=roboto&text=${encodeURIComponent(t("placeholderText"))}`}
          darkVariantSrc={`https://placehold.co/300x64/png?font=roboto&text=${encodeURIComponent(t("placeholderText"))}`}
          alt="Placeholder 1"
          width={300}
          height={64}
        />
      </Marquee>

      <p className="mb-10 text-center text-2xl font-medium text-foreground">
        {t("testimonialsTitle")}
      </p>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Blockquote
              author="Cosden Solutions"
              testimonial={t("testimonialCosden")}
              companyLogoProps={{
                lightVariantSrc: `/assets/experiences/cosden_solutions_light_mode_no_text.png`,
                darkVariantSrc: `/assets/experiences/cosden_solutions_dark_mode_no_text.png`,
                alt: "Cosden Solutions",
              }}
            />
          </CarouselItem>

          <CarouselItem>
            <Blockquote
              author="Cosden Solutions"
              testimonial={t("testimonialCosden")}
              companyLogoProps={{
                lightVariantSrc: `/assets/experiences/cosden_solutions_light_mode_no_text.png`,
                darkVariantSrc: `/assets/experiences/cosden_solutions_dark_mode_no_text.png`,
                alt: "Cosden Solutions",
              }}
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious variant="secondary" />
        <CarouselNext variant="secondary" />
      </Carousel>
    </section>
  )
}
