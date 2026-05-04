import { Blockquote } from "@/components/blockquote"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import { CompanyLogo } from "@/components/company-logo"
import { ContactForm } from "@/components/contact-form"
import { KeymapModal } from "@/components/keymap-modal"
import { Marquee } from "@/components/marquee"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Link } from "@heroui/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { SkillsSection } from "./skills.section"

export default function HomePage() {
  return (
    <>
      <main className="min-h-dvh px-10">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <KeymapModal />
    </>
  )
}

function AboutSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto flex max-w-5xl items-center justify-center pt-28"
      id={SECTION_ID_MAP.about}
    >
      <div className="space-y-5">
        <h1 className="uppercase">{t("name")}</h1>

        <p className="space-y-2.5 leading-8 *:inline-block">
          <span className="font-medium">
            <span className="text-foreground">{t("jobTitle")}</span>{" "}
            {t("aboutHas")}{" "}
            <Link
              className="inline text-lg text-balance text-muted"
              href={`#${SECTION_ID_MAP.experience}`}
            >
              <span className="text-foreground">{t("aboutExperience")}</span>
              {t("aboutCollaboratingWith")}
              <span className="text-foreground">{t("aboutRealProjects")}</span>
              <Link.Icon className="align-middle" />
            </Link>
            {t("aboutFocusedOn")}{" "}
            <Link
              className="inline text-lg text-balance"
              href={`#${SECTION_ID_MAP.skills}`}
            >
              {t("aboutTsReact")} <Link.Icon className="align-middle" />
            </Link>
            .
          </span>

          <span>{t("aboutBackground")}</span>
        </p>
      </div>
      <Image
        src={process.env.NEXT_PUBLIC_AVATAR_URL}
        alt="A picture of me"
        width={300}
        height={400}
        className="h-auto rounded-3xl shadow-lg"
      />
    </section>
  )
}

function ExperienceSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto h-dvh max-w-6xl space-y-10 pt-28"
      id={SECTION_ID_MAP.experience}
    >
      <h2 className="text-center text-2xl tracking-wide uppercase">
        {t("experienceTitle")}
      </h2>

      <Marquee className="mb-14 [--duration:15s]">
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

      <p className="text-center text-2xl font-medium text-foreground">
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

function ContactSection() {
  return (
    <section
      className="mx-auto h-dvh max-w-xl space-y-10 pt-28"
      id={SECTION_ID_MAP.contact}
    >
      <h2 className="text-center text-2xl tracking-wide uppercase">
        Contact me
      </h2>

      <ContactForm />
    </section>
  )
}
