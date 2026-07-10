import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/lib/convex/provider";
import { AnalyticsScript, PageViewTracker } from "@/components/analytics";
import "./globals.css";

export const dynamic = "force-dynamic";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const grandSlang = localFont({
  src: "../fonts/GrandSlang-Roman.ttf",
  variable: "--font-grand-slang",
  weight: "400",
  style: "normal",
});

const cendrickNode = localFont({
  src: "../fonts/CendrickNodeDEMO-Extended.ttf",
  variable: "--font-cendrick",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    default: "VENTRIEE — Web Development Agency for Gyms, Schools, Restaurants & Local Businesses",
    template: "%s | VENTRIEE",
  },
  description:
    "VENTRIEE builds fast, modern websites for gyms, schools, restaurants, startups, clinics, hotels, and local businesses. Custom web development with Next.js, Tailwind CSS, and Framer Motion.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "VENTRIEE — Web Development Agency",
    description:
      "Fast, modern websites for gyms, schools, restaurants, startups, and local businesses.",
    url: "https://ventriee.in",
    siteName: "VENTRIEE",
    locale: "en_IN",
    type: "website",
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
  verification: {
    google: "", // Add Google Search Console verification code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${grandSlang.variable} ${cendrickNode.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-signal-violet focus:px-4 focus:py-2 focus:text-sm focus:text-almost-white"
        >
          Skip to content
        </a>
        <AnalyticsScript />

        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "VENTRIEE",
              description:
                "Freelance web development agency building fast, modern websites for gyms, schools, restaurants, startups, clinics, hotels, and local businesses.",
              url: "https://ventriee.in",
              image: "https://ventriee.in/logo.png",
              areaServed: "India",
              priceRange: "$$",
              contactPoint: {
                "@type": "ContactPoint",
                email: "ventriee.contact@gmail.com",
                contactType: "sales",
              },
              sameAs: [
                "https://github.com/Euforia-dhruv",
                // Add LinkedIn, Instagram, X URLs here
              ],
            }),
          }}
        />

        <ConvexAuthNextjsServerProvider>
          <ConvexClientProvider>
            {children}
            <Suspense fallback={null}>
              <PageViewTracker />
            </Suspense>
          </ConvexClientProvider>
        </ConvexAuthNextjsServerProvider>
      </body>
    </html>
  );
}
