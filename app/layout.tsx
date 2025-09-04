import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); 

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Gebo graphics",
  description: "I’m Daniel Gabriel, also known as Gebo, a freelance visual communication designer from Tanzania. I am passionate about transforming ideas into visuals that inspire, inform, and connect.",
  keywords: [
    "Gebo",
    "Gebo graphics",
    "graphics",
    "designing",
    "amosi",
    "amosi sanga",
    "Gebo creative",
  ],
  creator: "aptech",
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://gebocreative.com",
      "logo": "/assets/logo.png"
    }),
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
