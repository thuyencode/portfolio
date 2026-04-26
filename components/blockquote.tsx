import { QuoteIcon } from "lucide-react"
import { CompanyLogo } from "./company-logo"

type BlockquoteProps = {
  companyLogoProps: React.ComponentProps<typeof CompanyLogo>
  testimonial: string
  author: string
  authorTitle?: string
}

export function Blockquote({
  companyLogoProps,
  testimonial,
  author,
  authorTitle,
}: BlockquoteProps) {
  return (
    <figure className="mx-auto max-w-3xl space-y-6">
      <QuoteIcon className="mx-auto size-9 fill-muted text-transparent" />

      <blockquote>
        <p className="text-center text-muted">&quot;{testimonial}&quot;</p>
      </blockquote>

      <figcaption className="flex items-center justify-center space-x-3">
        <CompanyLogo
          {...companyLogoProps}
          className="size-12 rounded-full object-contain"
          width={48}
          height={48}
        />

        <div className="flex items-center divide-x-2 divide-muted">
          <div className="pr-3 font-medium text-foreground dark:text-white">
            {author}
          </div>

          {authorTitle ? (
            <div className="pl-3 text-sm font-light text-muted">
              {authorTitle}
            </div>
          ) : null}
        </div>
      </figcaption>
    </figure>
  )
}
