import "./globals.css";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/ContactUs";
import { Navbar } from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import BackgroundImageReserve from "@/components/BackgroundImage";
import { Toaster } from "react-hot-toast";


import {
  Cinzel,
  Playfair_Display,
  Lustria,
  Lato,
  Fauna_One,
  Alice,
} from "next/font/google";

// Load each font
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const lustria = Lustria({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lustria",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const fauna = Fauna_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fauna",
});

const alice = Alice({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alice",
});

// export const metadata = {
//   title: "NOC NOC",
//   description: "Dubai Restrobar",
//   icons: {
//     icon: [
//       { url: "/nocnocFavicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//       { url: "/nocnocFavicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//       { url: "/nocnocFavicon/favicon.ico", type: "image/x-icon" },
//     ],
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",
// };

export const metadata = {
  title: "Noc Noc Dubai | Lounge, Restrobar & Nightlife Destination",
  description:
    "Noc Noc Dubai is the ultimate restrobar and lounge offering world-class food, drinks, and nightlife vibes in the heart of Dubai.",
  icons: {
    icon: [
      { url: "/nocnocFavicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/nocnocFavicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/nocnocFavicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
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
        url: "https://www.nocnocdubai.ae/og-image.jpg", // put a real image from your site
        width: 1200,
        height: 630,
        alt: "Noc Noc Dubai Lounge",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restrobar Lounge",
              name: "Noc Noc Dubai",
              address: {
                addressStreet: "Recreation Club - Mena Jabal Ali - Dubai - United Arab Emirates",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              servesCuisine: "Continental, Fusion, Bar Food",
              telephone: "+9710547063640",
              url: "https://www.nocnocdubai.ae",
            }),
          }}
        />

      </head>
      <body
        className={`${cinzel.variable} ${playfair.variable} ${lustria.variable} ${lato.variable} ${fauna.variable} ${alice.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        <BackgroundImageReserve/>
        <ContactUsSection />
        <Footer />
      </body>
    </html>
  );
}
