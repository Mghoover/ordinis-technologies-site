import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact | Ordinis Technologies',
  description: 'Contact Ordinis Technologies for implementation and institutional inquiries.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/contact/',
  },
};

export default function ContactPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Contact' }]} />
      <div className="kicker">Contact</div>
      <h1>Contact</h1>
      <p className="lede">
        For implementation inquiries, security coordination, or technical discussion, contact the
        team directly.
      </p>

      <section>
        <h2>Email</h2>
        <p>
          <a href="mailto:hoover.matthew0@gmail.com">hoover.matthew0@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>Response posture</h2>
        <p>
          Communications are handled with a technical-first process suitable for operational and
          institutional stakeholders.
        </p>
      </section>
    </div>
  );
}
