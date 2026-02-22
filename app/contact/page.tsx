import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Ordinis Technologies.',
};

export default function ContactPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Contact' }]} />
      <div className="kicker">Contact</div>
      <h1>Contact</h1>
      <p className="lede">
        For implementation inquiries or technical discussion, reach out.
      </p>

      <div className="rule" />

      <h2>Email</h2>
      <p className="small">
        Add your preferred inbox once configured (e.g., <code>info@ordinistechnologies.com</code>).
      </p>

      <h2>Notes</h2>
      <ul className="list">
        <li>Keep this page simple. No forms unless you explicitly want them.</li>
        <li>When you add email, consider SPF/DKIM/DMARC before publishing widely.</li>
      </ul>
    </div>
  );
}
