'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'; 
import { Loading } from '@/components';
import Head from 'next/head';

// Load fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true); // Start with loading=true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Gebo Graphics</title>
        <meta
          name="description"
          content="I’m Daniel Gabriel, also known as Gebo, a freelance visual communication designer from Tanzania..."
        />
        <meta
          name="keywords"
          content="Gebo, Gebo graphics, graphics, designing, amosi, amosi sanga, Gebo creative"
        />
        <meta name="creator" content="Aptech" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              url: 'https://gebocreative.com',
              logo: '/assets/logo.png',
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {/* Show loading first, then children */}
        {loading ? <Loading /> : children}
      </body>
    </html>
  );
}
