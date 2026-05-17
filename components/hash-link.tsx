"use client"

import { buttonVariants, cn } from "@heroui/react"
import { useEffect, useState } from "react"

interface HashLinkProps extends Omit<React.ComponentProps<"a">, "className"> {
  href: `#${string}`
  isButton?: boolean
  className?: string
}

export function HashLink({
  href,
  children,
  isButton = false,
  className,
  ...props
}: HashLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const element = document.querySelector(href)

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setIsActive(entries[0]?.isIntersecting ?? false)
      },
      { rootMargin: "0px", threshold: 0.5 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [href])

  return (
    <a
      href={href}
      className={
        isButton
          ? buttonVariants({
              variant: isActive ? "primary" : "ghost",
              className,
            })
          : cn("text-base font-medium", className, { "text-accent": isActive })
      }
      {...props}
    >
      {children}
    </a>
  )
}
