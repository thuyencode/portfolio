import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google"
import "./globals.css"

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" })

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" })

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
        nunitoSans.variable,
        geistHeading.variable
      )}
    >
      <body className="relative flex min-h-screen w-full flex-col items-center bg-white px-20 py-10">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
