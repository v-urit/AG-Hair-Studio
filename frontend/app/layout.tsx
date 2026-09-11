import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/json-ld"
import { DemoBadge } from "@/components/demo-badge"
import "./globals.css"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aghair.ie"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AG Hair Studio | Luxury Hair Salon & Balayage in Mullingar",
    template: "%s | AG Hair Studio",
  },
  description:
    "Mullingar's premier hair studio on Ross Rd by Agnes Burke. Rated 5.0 on Google. 24/7 online booking for precision haircuts, French balayage, Olaplex treatments, and bridal styling.",
  keywords: [
    "AG Hair Studio",
    "Agnes Burke Hairdressing",
    "hair salon Mullingar",
    "balayage Mullingar",
    "hairdresser Ross Rd",
    "haircut Westmeath",
    "luxury hair salon Ireland",
    "bridal hair Westmeath",
  ],
  authors: [{ name: "AG Hair Studio" }],
  creator: "AG Hair Studio",
  publisher: "AG Hair Studio",
  applicationName: "AG Hair Studio",
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  category: "beauty",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    siteName: "AG Hair Studio",
    title: "AG Hair Studio | Luxury Hair Salon & Balayage in Mullingar",
    description:
      "Mullingar's premier hair sanctuary on Ross Rd. Rated 5.0 on Google. Precision cuts, bespoke color, and restorative hair therapies.",
    images: [
      {
        url: "/images/hero_hair_studio.jpg",
        width: 1200,
        height: 630,
        alt: "AG Hair Studio interior on Ross Rd Mullingar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Hair Studio | Luxury Hair Salon in Mullingar",
    description:
      "Bespoke precision haircuts, French balayage, and restorative hair therapies by Agnes Burke on Ross Rd.",
    images: ["/images/hero_hair_studio.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <DemoBadge />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  )
}
