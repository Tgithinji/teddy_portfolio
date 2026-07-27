import type React from "react";
import type { Metadata } from "next";
import { Geist, Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teddygithinji.me"),
  title: "Teddy Githinji — Software & Systems Engineer",
  description:
    "Building custom business systems, AI automations, internal tools, and high-performance web applications for operating teams.",
  keywords: [
    "Teddy Githinji",
    "Software Engineer Kenya",
    "Automation Architect",
    "AI Intake Automations",
    "FastAPI Python Developer",
    "Next.js Developer",
    "n8n Workflow Automation",
    "Business Systems Engineer",
  ],
  creator: "Teddy Githinji",
  alternates: {
    canonical: "https://teddygithinji.me",
  },
  openGraph: {
    title: "Teddy Githinji — Software & Systems Engineer",
    description:
      "Building custom business systems, AI automations, internal tools, and high-performance web applications.",
    url: "https://teddygithinji.me",
    siteName: "Teddy Githinji",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Teddy Githinji — Software & Systems Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy Githinji — Software & Systems Engineer",
    description:
      "Building custom business systems, AI automations, internal tools, and high-performance web applications.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

export const viewport = {
  themeColor: "#151516",
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
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
