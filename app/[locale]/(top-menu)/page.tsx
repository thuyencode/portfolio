import avatarImage from "@/assets/avatar.jpg"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HomePage() {
  const t = useTranslations("page.Home")

  return (
    <div className="flex h-dvh items-center justify-center">
      <Image
        src={avatarImage}
        alt="A picture of me"
        width={400}
        className="rounded-3xl shadow-lg"
      />
    </div>
  )
}
