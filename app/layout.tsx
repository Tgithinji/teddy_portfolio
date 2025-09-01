import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Teddy | Software Developer & Automation Engineer",
  description: "Portfolio showcasing full-stack software projects and workflow automations.",
  keywords: ["Software Developer", "Automation Engineer", "Full Stack", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Teddy Githinji" }],
  creator: "Teddy Githinji",
  openGraph: {
    title: "Teddy | Software Developer & Automation Engineer",
    description: "Portfolio showcasing full-stack software projects and workflow automations.",
    url: "https://teddy-portfolio.vercel.app",
    siteName: "Teddy's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Teddy's Portfolio - Software Developer & Automation Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy | Software Developer & Automation Engineer",
    description: "Portfolio showcasing full-stack software projects and workflow automations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
