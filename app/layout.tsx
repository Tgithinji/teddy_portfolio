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
    "Teddy Githinji Muraguri",
    "Teddy Githinji",
    "Teddy",
    "Software Developer Kenya",
    "Automation Kenya",
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
        url: "/og-image.webp",
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
    images: ["/og-image.webp"],
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
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  authors: [
    {
      name: "Teddy Githinji Muraguri",
      url: "https://teddygithinji.me",
    },
  ],
};

export const viewport = {
  themeColor: "#0f172a",
};

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/Teddy.webp" as="image" type="image/webp" />
        <link
          rel="preload"
          href="/og-image.webp"
          as="image"
          type="image/webp"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for above-the-fold content */
              .font-sans { font-family: var(--font-geist), ui-sans-serif, system-ui, sans-serif; }
              .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
              .min-h-screen { min-height: 100vh; }
              .bg-background { background-color: hsl(var(--background)); }
              .text-foreground { color: hsl(var(--foreground)); }
              .hidden { display: none; }
              @media (min-width: 1024px) { .lg\\:block { display: block; } .lg\\:hidden { display: none; } }
            `,
          }}
        />
      </head>
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
