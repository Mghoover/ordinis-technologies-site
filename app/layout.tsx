import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://ordinistechnologies.com'),
  title: 'Ordinis Technologies | Clinical Infrastructure Built to Endure',
  description:
    'Clinical infrastructure engineered for control, stability, and long-term integrity.',
  openGraph: {
    title: 'Ordinis Technologies | Clinical Infrastructure Built to Endure',
    description:
      'Clinical infrastructure engineered for control, stability, and long-term integrity.',
    url: 'https://ordinistechnologies.com/',
    siteName: 'Ordinis Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordinis Technologies | Clinical Infrastructure Built to Endure',
    description:
      'Clinical infrastructure engineered for control, stability, and long-term integrity.',
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
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
