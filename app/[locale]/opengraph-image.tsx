import { routing } from "@/i18n/routing"
import { type Locale } from "next-intl"
import { getTranslations } from "next-intl/server"
import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function OpengraphImage({
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale }
  const t = await getTranslations({ locale, namespace: "page.Home" })

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 100,
        backgroundImage: `url(${process.env.DOMAIN}/assets/backgrounds/opengraph.png)`,
        backgroundSize: "1200px 630px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            textTransform: "uppercase",
          }}
        >
          {t("name")}
        </span>

        <span
          style={{
            fontSize: "2rem",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          {t("jobTitle")}
        </span>
      </div>

      <img
        src={`${process.env.DOMAIN}${process.env.NEXT_PUBLIC_AVATAR_URL}`}
        alt=""
        style={{
          width: 300,
          height: 300,
          borderRadius: 24,
          objectFit: "cover",
          objectPosition: "0% 20%",
          flexShrink: 0,
        }}
      />
    </div>
  )
}
