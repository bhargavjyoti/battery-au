import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "../components/LenisProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://batteryaustralia.com.au"),
  title: {
    default: "Battery Australia | 24/7 Mobile Battery Replacement Brisbane & Gold Coast",
    template: "%s | Battery Australia"
  },
  description: "Dead battery? We deliver & fit premium car, truck, motorcycle, marine, and golf cart batteries 24/7 across Brisbane & the Gold Coast in 60 mins. No call-out fee!",
  keywords: [
    "mobile battery replacement",
    "car battery replacement Brisbane",
    "car battery Gold Coast",
    "emergency roadside jumpstart",
    "cheap car batteries Brisbane",
    "marine battery replacement",
    "truck battery rescue",
    "24/7 battery service SEQ"
  ],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Battery Australia | 24/7 Mobile Battery Replacement",
    description: "On-site battery delivery & installation in 60 minutes across Brisbane & Gold Coast. Premium brands, upfront pricing, zero call-out fees.",
    url: "https://batteryaustralia.com.au",
    siteName: "Battery Australia",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Battery Australia Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Battery Australia | 24/7 Mobile Battery Service",
    description: "Brisbane & Gold Coast emergency roadside battery replacement within 60 mins. Premium warranty included.",
    images: ["/logo.webp"]
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
