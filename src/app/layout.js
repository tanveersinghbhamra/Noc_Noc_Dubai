import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "react-hot-toast";

import {
  Cinzel,
  Alice,
  Lato,
} from "next/font/google";

// Load each font
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const alice = Alice({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alice",
});

export const metadata = {
  metadataBase: new URL("https://www.nocnocdubai.ae"),
  title: "Noc Noc Dubai | Lounge, Restrobar & Nightlife Destination",
  description:
    "Noc Noc Dubai is the ultimate restrobar and lounge offering world-class food, drinks, and nightlife vibes in the heart of Dubai.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/nocnocFavicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/nocnocFavicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/nocnocFavicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/nocnocFavicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/nocnocFavicon/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    manifest: "/site.webmanifest",
  },

  keywords: [
    "noc noc dubai",
    "dubai restrobar",
    "dubai nightlife",
    "dubai lounge",
    "nocnocdubai",
  ],
  openGraph: {
    title: "Noc Noc Dubai | Lounge & Restrobar",
    description:
      "Experience premium food, cocktails, and nightlife at Noc Noc Dubai.",
    url: "https://www.nocnocdubai.ae",
    siteName: "Noc Noc Dubai",
    images: [
      {
        url: "https://www.nocnocdubai.ae/nocnocImages/dubaiPulse.jpeg",
        width: 1200,
        height: 630,
        alt: "Noc Noc Dubai Lounge",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.nocnocdubai.ae",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.nocnocdubai.ae" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Noc Noc Dubai",
              image: "https://www.nocnocdubai.ae/nocnocImages/dubaiPulse.jpeg",
              logo: "https://www.nocnocdubai.ae/nocnocFavicon/android-chrome-512x512.png",
              url: "https://www.nocnocdubai.ae",
              telephone: "+9710547063640",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Recreation Club, Mena Jabal Ali",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              servesCuisine: ["Continental", "Fusion", "Bar Food"],
              priceRange: "$$",
            }),
          }}
        />

      </head>
      <body
        className={`${cinzel.variable} ${lato.variable} ${alice.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
