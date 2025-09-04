import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FinoCalci - Professional Finance Calculator Platform",
    template: "%s | FinoCalci"
  },
  description: "Discover 3000+ professional finance calculators for loans, mortgages, investments, savings, and business planning. Calculate instantly with accurate results.",
  keywords: [
    "finance calculator",
    "loan calculator", 
    "mortgage calculator",
    "investment calculator",
    "savings calculator",
    "business calculator",
    "financial planning",
    "money calculator"
  ],
  authors: [{ name: "FinoCalci Team" }],
  creator: "FinoCalci",
  publisher: "FinoCalci",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'FinoCalci - Professional Finance Calculator Platform',
    description: 'Discover 3000+ professional finance calculators for loans, mortgages, investments, savings, and business planning.',
    siteName: 'FinoCalci',
    images: [
      {
        url: '/images/finocalci-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FinoCalci - Finance Calculator Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinoCalci - Professional Finance Calculator Platform',
    description: 'Discover 3000+ professional finance calculators for loans, mortgages, investments, savings, and business planning.',
    images: ['/images/finocalci-twitter-image.jpg'],
    creator: '@finocalci',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add your Google Search Console verification code
    yandex: 'yandex-verification-code', // Add your Yandex verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066cc" />
      </head>
      <body className="font-inter antialiased bg-background text-foreground">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}