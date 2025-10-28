import "./globals.css";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/ContactUs";
import { Navbar } from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

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

export const metadata = {
  title: "NOC NOC",
  description: "Dubai Restrobar",
  icons: {
    icon: [
      { url: "/nocnocFavicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/nocnocFavicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/nocnocFavicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${playfair.variable} ${lustria.variable} ${lato.variable} ${fauna.variable} ${alice.variable} antialiased bg-gradient-to-b from-slate-950 to-slate-800`}
      >
        <Navbar />
        {children}
        <ContactUsSection />
        <Footer />
      </body>
    </html>
  );
}
