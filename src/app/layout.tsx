import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const fontHeading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
})

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
