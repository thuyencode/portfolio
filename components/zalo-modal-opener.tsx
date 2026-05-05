"use client"

import { Link, usePathname } from "@/i18n/navigation"
import { SkillIcon } from "./skill-icon"

interface ZaloModalOpenerProps {
  iconProps?: Omit<React.ComponentProps<typeof SkillIcon>, "src" | "alt">
}

export function ZaloModalOpener({ iconProps }: ZaloModalOpenerProps) {
  const pathname = usePathname()

  return (
    <Link href={{ pathname, query: { zalo: "true" } }} scroll={false}>
      <SkillIcon
        src="/assets/contacts/Icon_of_Zalo.svg"
        alt="Zalo"
        size={40}
        {...iconProps}
      />
    </Link>
  )
}
