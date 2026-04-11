"use server"

import { cookies } from "next/headers"

export async function setLocaleToDefaultAction() {
  const cookieStore = await cookies()

  cookieStore.delete("NEXT_LOCALE")
}
