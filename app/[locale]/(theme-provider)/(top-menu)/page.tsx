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
import { CopyButton } from "@/components/copy-button"
import { KeymapModal } from "@/components/keymap-modal"
import { Marquee } from "@/components/marquee"
import { SkillIcon } from "@/components/skill-icon"
import { ZaloModal } from "@/components/zalo-modal"
import { ZaloModalOpener } from "@/components/zalo-modal-opener"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Link } from "@heroui/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { SkillsSection } from "./skills.section"

export default function HomePage() {
  return (
    <>
      <main className="space-y-28">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <KeymapModal />
      <ZaloModal />
    </>
  )
}

function AboutSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto mt-28 flex max-w-5xl items-center justify-center"
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
        className="h-auto rounded-3xl shadow-lg"
        width={process.env.NEXT_PUBLIC_AVATAR_WIDTH}
        height={process.env.NEXT_PUBLIC_AVATAR_HEIGHT}
        loading="eager"
      />
    </section>
  )
}

function ExperienceSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto max-w-6xl space-y-10"
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

function EducationSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto max-w-3xl space-y-10"
      id={SECTION_ID_MAP.education}
    >
      <h2 className="text-center text-2xl tracking-wide uppercase">
        {t("educationTitle")}
      </h2>
      <ul className="d-timeline d-timeline-vertical d-timeline-snap-icon max-md:d-timeline-compact">
        <li>
          <div className="d-timeline-middle">
            <Image
              src="/assets/education/funix-favicon-mascot.png"
              alt="FUNiX's mascot"
              width={40}
              height={40}
            />
          </div>
          <div className="d-timeline-start md:mb-10 md:text-end">
            <time className="font-mono italic">{t("educationStartDate")}</time>
            <h3 className="text-lg font-black">{t("educationStudiedAt")}</h3>
            {t("educationFunixSoftware")}.
          </div>
          <hr className="bg-default" />
        </li>

        <li>
          <hr className="bg-default" />
          <div className="d-timeline-middle">
            <Image
              src="/assets/education/funix-favicon-mascot.png"
              alt="FUNiX's mascot"
              width={40}
              height={40}
            />
          </div>
          <div className="d-timeline-end md:mb-10">
            <time className="font-mono italic">
              {t("educationBlockchainDate")}
            </time>
            <h3 className="text-lg font-black">{t("educationStudiedAt")}</h3>
            {t("educationFunixBlockchain")}.
          </div>
          <hr className="bg-default" />
        </li>

        <li>
          <hr className="bg-default" />
          <div className="d-timeline-middle">
            <Image
              src="/assets/education/funix-favicon-mascot.png"
              alt="FUNiX's mascot"
              width={40}
              height={40}
            />
          </div>
          <div className="d-timeline-start">
            <time className="font-mono italic">
              {t("educationGraduationDate")}
            </time>
            <h3 className="text-lg font-black">
              {t("educationFunixGraduation")}
            </h3>
          </div>
          <hr className="bg-default" />
        </li>
      </ul>
    </section>
  )
}

function ContactSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto max-w-xl space-y-10"
      id={SECTION_ID_MAP.contact}
    >
      <h2 className="text-center text-2xl tracking-wide uppercase">
        {t("contactTitle")}
      </h2>

      <ul className="space-x-2.5 text-center">
        <li className="group inline-block">
          <a href={process.env.NEXT_PUBLIC_MY_LINKEDIN} target="_blank">
            <SkillIcon
              src="https://go-skill-icons.vercel.app/api/icons?i=linkedin"
              alt="LinkedIn"
              className="duration-150 ease-in-out group-hover:-translate-y-1.5"
              size={40}
              loading="lazy"
            />
          </a>
        </li>
        <li className="group inline-block">
          <a href={process.env.NEXT_PUBLIC_MY_FACEBOOK} target="_blank">
            <SkillIcon
              src="https://go-skill-icons.vercel.app/api/icons?i=facebook"
              alt="Facebook"
              className="duration-150 ease-in-out group-hover:-translate-y-1.5"
              size={40}
              loading="lazy"
            />
          </a>
        </li>
        <li className="group inline-block">
          <ZaloModalOpener
            iconProps={{
              className:
                "duration-150 ease-in-out group-hover:-translate-y-1.5",
              size: 40,
              loading: "lazy",
            }}
          />
        </li>
      </ul>

      <div className="space-y-2.5 text-center">
        <p className="font-medium text-foreground">{t("emailPrompt")}</p>
        <CopyButton text={process.env.NEXT_PUBLIC_MY_EMAIL} />
        <p className="font-medium text-foreground">{t("emailBelow")}</p>
      </div>

      <ContactForm />
    </section>
  )
}
