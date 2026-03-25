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

        {/* Teal Glow Background */}
        <div
          className="absolute inset-0 -z-10 dark:hidden"
          style={{
            backgroundImage: `
              radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
            `,
            backgroundSize: "100% 100%",
          }}
        />

        {/* Emerald Void */}
        <div
          className="absolute inset-0 -z-10 not-dark:hidden"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
          }}
        />
      </body>
    </html>
  )
}
