import { ThemeProvider } from "@/components/theme-provider"

export default function ThemeProviderLayout({
  children,
}: React.PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>
}
