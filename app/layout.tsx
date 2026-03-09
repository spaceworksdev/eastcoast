import type { Metadata, Viewport } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SchemaMarkup } from '@/components/schema-markup'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'East Coast Boat Removal | Licensed & Insured Boat Disposal',
  description: 'Professional boat removal and disposal services across Florida. Licensed, insured, and available 24/7. Get a free quote today.',
  generator: 'v0.app',
  keywords: 'boat removal, boat disposal, boat junk removal, marine salvage, boat recovery, Florida boat removal',
  openGraph: {
    title: 'East Coast Boat Removal',
    description: 'Professional boat removal and disposal services across Florida',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#0B315C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-sans antialiased bg-white text-navy">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
