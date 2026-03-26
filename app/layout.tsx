import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Geist, Geist_Mono, Nunito_Sans, Inter } from "next/font/google"
import "./globals.css"

const nunitoSansHeading = Nunito_Sans({subsets:['latin'],variable:'--font-heading'})

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

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
      <body className="relative flex min-h-screen w-full flex-col items-center bg-white px-20 py-10">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
