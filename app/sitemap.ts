import { getPathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${process.env.DOMAIN}${getPathname({ locale, href: "/" })}`,
    lastModified: new Date(),
  }))
}
