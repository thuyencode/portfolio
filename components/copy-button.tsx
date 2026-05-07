"use client"

import { Button, cn } from "@heroui/react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, "children"> & {
  text: string
}

export function CopyButton({ text, className, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const [disabled] = useState(() => typeof navigator === "undefined")

  function handleCopy() {
    if (copied) {
      return
    }

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Button
      variant="tertiary"
      isDisabled={disabled}
      onClick={handleCopy}
      className={cn(className, {
        "bg-success text-success-foreground": copied,
      })}
      {...props}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span className="sr-only">Copy</span> {text}
    </Button>
  )
}
