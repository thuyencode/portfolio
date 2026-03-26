import { Button } from "@/components/ui/button"

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
