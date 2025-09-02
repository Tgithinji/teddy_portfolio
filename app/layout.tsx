import type React from "react";
import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teddygithinji.me"),
  title: "Teddy | Software Developer & Automation Engineer",
  description:
    "Portfolio showcasing full-stack software projects and workflow automations.",
  keywords: [
    "Software Developer",
    "Automation Engineer",
    "Full Stack",
    "Backend developer",
    "PostgreSQL",
    "Python",
    "FastAPI",
    "MySQL",
    "n8n",
    "SQL",
    "Flask",
  ],
  authors: [{ name: "Teddy Githinji" }],
  creator: "Teddy Githinji",
  alternates: {
    canonical: "https://teddygithinji.me",
  },
  openGraph: {
    title: "Teddy | Software Developer & Automation Engineer",
    description:
      "Portfolio showcasing full-stack software projects and workflow automations.",
    url: "https://teddygithinji.me",
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
    description:
      "Portfolio showcasing full-stack software projects and workflow automations.",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  }
};

export const viewport = {
  themeColor: "#0f172a",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${manrope.variable} antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Teddy Githinji",
              url: "https://teddygithinji.me",
              jobTitle: "Software Developer & Automation Engineer",
              sameAs: [
                "https://github.com/Tgithinji",
                "https://www.linkedin.com/in/teddy-githinji",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
