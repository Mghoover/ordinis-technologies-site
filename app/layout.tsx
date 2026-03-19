import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { geoMeta, sharedKeywords, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Ordinis Technologies | Florence SC Technology',
  description:
    'Custom websites and practice management software built in Florence, South Carolina.',
  keywords: sharedKeywords,
  openGraph: {
    title: 'Ordinis Technologies | Florence SC Technology',
    description:
      'Custom websites and practice management software built in Florence, South Carolina.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordinis Technologies | Florence SC Technology',
    description:
      'Custom websites and practice management software built in Florence, South Carolina.',
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: geoMeta,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <div className="shell">
          <SiteHeader />
          <main id="content" className="content">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
