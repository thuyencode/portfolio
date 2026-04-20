import { cn } from "@/lib/utils"
import Image from "next/image"

interface CompanyLogoProps extends Omit<
  React.ComponentProps<typeof Image>,
  "src"
> {
  lightVariantSrc: React.ComponentProps<typeof Image>["src"]
  darkVariantSrc: React.ComponentProps<typeof Image>["src"]
}

export function CompanyLogo({
  lightVariantSrc,
  darkVariantSrc,
  className,
  alt,
  ...props
}: CompanyLogoProps) {
  return (
    <figure>
      <Image
        {...props}
        src={lightVariantSrc}
        alt={alt}
        className={cn("h-16 w-auto object-cover dark:hidden", className)}
        loading="lazy"
      />
      <Image
        {...props}
        src={darkVariantSrc}
        alt={alt}
        className={cn("hidden h-16 w-auto object-cover dark:block", className)}
        loading="lazy"
      />
    </figure>
  )
}
