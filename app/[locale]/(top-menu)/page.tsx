import avatarImage from "@/assets/avatar.jpg"
import cosdenLogoDark from "@/assets/experiences/cosden_solutions_dark_mode.png"
import cosdenLogoDarkNoText from "@/assets/experiences/cosden_solutions_dark_mode_no_text.png"
import cosdenLogoLight from "@/assets/experiences/cosden_solutions_light_mode.png"
import cosdenLogoLightNoText from "@/assets/experiences/cosden_solutions_light_mode_no_text.png"
import { Blockquote } from "@/components/blockquote"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import { CompanyLogo } from "@/components/company-logo"
import { KeyboardShortcutsModal } from "@/components/keyboard-shortcuts-modal"
import { MarqueeList } from "@/components/marquee-list"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Chip } from "@heroui/react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <main className="min-h-dvh space-y-12 py-32">
        <HomeSection />
        <ExperienceSection />
      </main>

      <KeyboardShortcutsModal />
    </>
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
      className="mx-auto h-dvh max-w-6xl px-10"
      id={SECTION_ID_MAP.experience}
    >
      <h2>{t("experienceTitle")}</h2>

      <MarqueeList className="mt-10 mb-14">
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

      <p className="mb-10 text-center text-2xl font-medium text-foreground">
        Some words from past employers and partners
      </p>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Blockquote
              author="Cosden Solutions"
              testimonial="I worked with Thuyen on an educational platform for Cosden Solutions for a couple of months. I can say that Thuyen is a great developer with a lot of potential. He is very thorough, learns quickly, and produces very good work. I have given him tough challenges to face, some even beyond his current skillset, and he has risen to face those challenges and succeeded every time. Working with Thuyen is really easy. He is great at communication, will reach out when needed, and won't waste anyone's time. He is independent, and can handle tough problems and find solutions to them. He is also a great learner, which will make a very good investment as a developer. I'm sure he will grow and achieve great things. I would absolutely recommend Thuyen for any developer position as I genuinely think he will be an incredibly valuable resource!"
              companyLogoProps={{
                lightVariantSrc: cosdenLogoLightNoText,
                darkVariantSrc: cosdenLogoDarkNoText,
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
