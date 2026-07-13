import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const fontGaramond = Cormorant_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: "%s | Banasthali Vidyapith",
    default: "Banasthali Vidyapith | Premier Women's Residential University",
  },
  description: "Explore Banasthali Vidyapith, the world's largest residential university for women offering holistic Panchmukhi Shiksha (five-fold education) from nursery to doctoral studies across an 850-acre sanctuary in Rajasthan.",
  keywords: ["Banasthali Vidyapith", "Women's University", "Panchmukhi Shiksha", "Residential Campus Rajasthan", "Higher Education for Women", "UGC Approved Women University"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontGaramond.variable} antialiased`}
    >
      <body className="flex flex-col bg-background text-foreground min-h-screen">
        <SmoothScroll>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
