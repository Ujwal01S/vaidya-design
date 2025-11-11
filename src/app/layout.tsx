import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import "./globals.css";
import Footer from "@/components/layout/footer";

const montserratAlternates = Montserrat({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// setting meta data

export const metadata: Metadata = {
  title: "Logo",
  description: "Design",
  keywords: ["Cars", "Insurance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserratAlternates.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
