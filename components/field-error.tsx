"use client"

import { cn } from "@heroui/styles"
import { useMemo } from "react"

export function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<string | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [...new Set(errors.filter(Boolean))]

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]
    }

    return (
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
        {uniqueErrors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-sm", className)}
      {...props}
    >
      {content}
    </div>
  )
}
