import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Thank You | Ordinis Technologies',
    description:
      'Your intake has been submitted to Ordinis Technologies. Review services or return to the homepage.',
    path: '/contact/thank-you/',
    keywords: [
      'Ordinis Technologies thank you',
      'contact form confirmation',
      'project intake submitted',
    ],
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThankYouPage() {
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/contact', label: 'Contact' },
          { label: 'Thank You' },
        ]}
      />
      <div className="kicker">Submission Received</div>
      <h1>Thank you. Your intake is in.</h1>
      <p className="lede">
        Ordinis has received your submission. If the request is a fit, the next step will be a
        direct follow-up to review scope, goals, and timing.
      </p>
      <div className="btnRow">
        <Link className="btn btnPrimary" href="/digital-services">
          View Digital Services
        </Link>
        <Link className="btn" href="/core-practice">
          Review Core Practice
        </Link>
      </div>
    </div>
  );
}
