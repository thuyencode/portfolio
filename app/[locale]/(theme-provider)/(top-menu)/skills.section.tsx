import { OrbitingCircles } from "@/components/orbiting-circles"
import { type SkillIconProps, SkillIcon } from "@/components/skill-icon"
import { SECTION_ID_MAP } from "@/lib/constants"
import { Link } from "@heroui/react"
import { useTranslations } from "next-intl"

const softSkillIcons: SkillIconProps[] = [
  {
    src: `https://www.emoji.family/api/emojis/${encodeURIComponent("🤝")}/fluentflat/svg`,
    alt: "handshake emoji",
  },
  {
    src: `https://www.emoji.family/api/emojis/${encodeURIComponent("🌐")}/fluentflat/svg`,
    alt: "globe with meridians emoji",
  },
  {
    src: `https://www.emoji.family/api/emojis/${encodeURIComponent("📚️")}/fluentflat/svg`,
    alt: "books emoji",
  },
]

const reactRelatedIcons: SkillIconProps[] = [
  { src: "https://go-skill-icons.vercel.app/api/icons?i=react", alt: "React" },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=nextjs",
    alt: "Next.js",
  },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=reactquery",
    alt: "React Query",
  },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=tanstack",
    alt: "Tanstack",
  },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=shadcn",
    alt: "Shadcn",
  },
]

const tsRelatedIcons: SkillIconProps[] = [
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=ts",
    alt: "TypeScript",
  },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=nodejs",
    alt: "Node.js",
  },
  { src: "https://go-skill-icons.vercel.app/api/icons?i=bun", alt: "Bun" },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=express",
    alt: "Express.js",
  },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=elysia",
    alt: "Elysia",
  },
  {
    src: "https://go-skill-icons.vercel.app/api/icons?i=drizzle",
    alt: "Drizzle ORM",
  },
]

export function SkillsSection() {
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
            {softSkillIcons.map((icon) => (
              <SkillIcon key={icon.alt} {...icon} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles radius={235} iconSize={60} doubleChildren>
            {reactRelatedIcons.map((icon) => (
              <SkillIcon key={icon.alt} {...icon} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles radius={345} iconSize={60} doubleChildren>
            {tsRelatedIcons.map((icon) => (
              <SkillIcon key={icon.alt} {...icon} />
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </section>
  )
}
