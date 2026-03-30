import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Geist_Mono, Inter, Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunitoSansHeading = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        nunitoSansHeading.variable
      )}
    >
      <body className="relative min-h-screen w-full p-10">
        <ThemeProvider>{children}</ThemeProvider>
        <Background />
      </body>
    </html>
  )
}

function Background() {
  return (
    <div className="absolute inset-0 -z-10 bg-radial from-sky-300 via-background to-background backdrop-blur-lg dark:from-sky-950 dark:via-background dark:to-background" />
  )
}
