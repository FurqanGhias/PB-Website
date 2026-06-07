import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SmoothCursor from '../components/SmoothCursor';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Pitch Bhai',
  description: 'Founder Branding Growth Partner',
  icons: {
    icon: '/PitchBhai-Favicon.ico',
    shortcut: '/PitchBhai-Favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <SmoothCursor />
         <Analytics />
      </body>
    </html>
  );
}
