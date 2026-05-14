"use client"

import { useQueryString } from "@/hooks/use-query-string"
import { buttonVariants, Modal } from "@heroui/react"
import { useHotkey } from "@tanstack/react-hotkeys"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { SkillIcon } from "./skill-icon"

export function ZaloModal() {
  const t = useTranslations("component.ZaloModal")
  const { hasSaidParam, removeFromRoute, addToRoute } = useQueryString(
    "zalo",
    "true"
  )

  useHotkey("Z", () => {
    if (hasSaidParam) {
      removeFromRoute()
    } else {
      addToRoute()
    }
  })

  return (
    <Modal>
      <Modal.Backdrop
        isOpen={hasSaidParam}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            removeFromRoute()
          }
        }}
      >
        <Modal.Container placement="center">
          <Modal.Dialog className="w-sm">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-center text-lg!">
                {t("title")}
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="space-y-4">
              <p className="text-center text-sm! text-muted">
                {t("description")}
              </p>

              <Image
                src={process.env.NEXT_PUBLIC_MY_ZALO_QR_URL}
                alt="Zao QR code"
                width={216}
                height={216}
                className="mx-auto aspect-square w-full max-w-54 object-cover"
                loading="lazy"
              />
            </Modal.Body>

            <Modal.Footer className="flex-col-reverse">
              <a
                href={process.env.NEXT_PUBLIC_MY_ZALO_APP_URL}
                className={buttonVariants({ className: "w-full" })}
                target="_blank"
                slot="close"
                role="button"
              >
                <SkillIcon
                  src="/assets/contacts/Icon_of_Zalo.svg"
                  alt="Zalo"
                  size={20}
                  loading="lazy"
                  className="text-current"
                />
                {t("openInZalo")}
              </a>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}
