import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'Ordinis Technologies',
    template: '%s · Ordinis Technologies',
  },
  description:
    'Clinical infrastructure engineered for control, clarity, and longevity.',
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
