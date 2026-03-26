import { Button } from "@heroui/react"

export default function SideMenuLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <section className="absolute flex justify-between">
        <Button>Locale</Button>
      </section>

      {children}
    </>
  )
}
