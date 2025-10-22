import "./globals.css";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/ContactUs";
import { Navbar } from "@/components/Navbar";

import { Cinzel, Playfair_Display, Lustria, Lato, Fauna_One, Alice} from "next/font/google";

// Load each font
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"], // adjust as needed
  variable: "--font-cinzel",
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
  // icons: {
  //   icon: [
  //     { url: "/web-app-manifest-192x192.png", type: "image/png", sizes: "192x192" },
  //     { url: "/web-app-manifest-512x512.png", type: "image/png", sizes: "512x512" },
  //     // { url: "/apple-icon.png", type: "image/png" },
  //   ],
  //   // apple: "/apple-touch-icon.png",
  //   // other: [
  //   //   { rel: "android-chrome", url: "/android-chrome-192x192.png" },
  //   //   { rel: "android-chrome", url: "/android-chrome-512x512.png" },
  //   // ],http://localhost:3000/_next/image?url=%2FnocnocImages%2FdubaiPulse.jpeg&w=3840&q=100
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${playfair.variable} ${lustria.variable} ${lato.variable} ${fauna.variable} antialiased bg-gradient-to-b from-slate-950 to-slate-800`}
      >
        <Navbar/>
        {children}
        <ContactUsSection/>
        <Footer/>
      </body>
    </html>
  );
}
