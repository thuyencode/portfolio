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
import { OrbitingCircles } from "@/components/orbiting-circles"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Link } from "@heroui/react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <main className="min-h-dvh px-10">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
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
              TypeScript và React
              <Link.Icon className="align-middle" />
            </Link>
            .
          </span>

          <span>{t("aboutBackground")}</span>
        </p>
      </div>
      <Image
        src={`/assets/avatar.jpg`}
        alt="A picture of me"
        width={300}
        height={337}
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

function SkillsSection() {
  const t = useTranslations("page.Home")

  return (
    <section
      className="mx-auto max-w-6xl space-y-10 pt-28"
      id={SECTION_ID_MAP.skills}
    >
      <h2 className="text-center text-2xl tracking-wide uppercase">
        {t("skillsTitle")}
      </h2>

      <div className="space-y-3 text-center">
        <p>
          {t("skillsSelfLearningPrefix")}
          <Link
            className="inline text-lg text-balance text-muted"
            href={`#${SECTION_ID_MAP.experience}`}
          >
            <span className="text-foreground">
              {t("skillsSelfLearningLink")}
            </span>
            <Link.Icon className="align-middle" />
          </Link>
          .
        </p>

        <p>
          {t("skillsMainLangPrefix")}
          <span className="text-foreground">TypeScript</span>
          {t("skillsMainLangReason")}
          <span className="text-foreground">JavaScript</span>
          {t("skillsMainLangSuffix")}
          <span className="text-foreground">Express</span>,{" "}
          <span className="text-foreground">ElysiaJS</span>,{" "}
          <span className="text-foreground">Drizzle ORM</span>
          {t("skillsFrontendPrefix")}
          <span className="text-foreground">React</span>.
        </p>

        <p>
          {t("skillsStrengthPrefix")}
          <span className="text-foreground">React</span>
          {t("skillsStrengthSuffix")}
          <span className="text-foreground">React Router</span>,{" "}
          <span className="text-foreground">React Query</span>,{" "}
          <span className="text-foreground">React Hook Form</span> and{" "}
          <span className="text-foreground">Next.js</span>.
        </p>
      </div>

      <div className="h-87.5 w-full overflow-hidden">
        <div className="orbiting-circles-container h-187.5 w-full justify-start">
          <OrbitingCircles radius={125} iconSize={60} doubleChildren>
            <Image
              src={`https://www.emoji.family/api/emojis/${encodeURIComponent("🤝")}/fluentflat/svg`}
              alt="handshake emoji"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src={`https://www.emoji.family/api/emojis/${encodeURIComponent("🌐")}/fluentflat/svg`}
              alt="globe with meridians emoji"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src={`https://www.emoji.family/api/emojis/${encodeURIComponent("📚️")}/fluentflat/svg`}
              alt="books emoji"
              width={60}
              height={60}
              unoptimized
            />
          </OrbitingCircles>
          <OrbitingCircles radius={235} iconSize={60} doubleChildren>
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=react"
              alt="React"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=nextjs"
              alt="Next.js"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=reactquery"
              alt="React Query"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=tanstack"
              alt="Tanstack"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=shadcn"
              alt="Shadcn"
              width={60}
              height={60}
              unoptimized
            />
          </OrbitingCircles>
          <OrbitingCircles radius={345} iconSize={60} doubleChildren>
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=ts"
              alt="TypeScript"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=nodejs"
              alt="Node.js"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=bun"
              alt="Bun"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=express"
              alt="Express.js"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=elysia"
              alt="Elysia"
              width={60}
              height={60}
              unoptimized
            />
            <Image
              src="https://go-skill-icons.vercel.app/api/icons?i=drizzle"
              alt="Drizzle ORM"
              width={60}
              height={60}
              unoptimized
            />
          </OrbitingCircles>
        </div>
      </div>
    </section>
  )
}
