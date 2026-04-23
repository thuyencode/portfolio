import { usePathname, useRouter } from "@/i18n/navigation"
import { useSearchParams } from "next/navigation"

export function useQueryString(name: string, value: string) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const hasSaidParam = searchParams.has(name)

  function addQuery() {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  }

  function removeQuery() {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(name)

    return params.toString()
  }

  function addToRoute() {
    router.push(`${pathname}?${addQuery()}`, { scroll: false })
  }

  function removeFromRoute() {
    router.push(`${pathname}?${removeQuery()}`, { scroll: false })
  }

  return { hasSaidParam, addToRoute, removeFromRoute }
}
