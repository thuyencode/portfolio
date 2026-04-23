"use client"

import { buttonVariants } from "@heroui/styles"
import { useEffect, useState } from "react"

interface HashLinkProps extends React.ComponentProps<"a"> {
  href: `#${string}`
}

export function HashLink({
  href,
  children,
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
      className={buttonVariants({
        variant: isActive ? "primary" : "ghost",
        className,
      })}
      {...props}
    >
      {children}
    </a>
  )
}
