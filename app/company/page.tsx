import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Company',
  description: 'About Ordinis Technologies.',
};

export default function CompanyPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Company' }]} />
      <div className="kicker">About</div>
      <h1>Company</h1>
      <p className="lede">
        Ordinis Technologies builds operational software designed for trust. Quiet systems that
        resist churn.
      </p>

      <div className="rule" />

      <h2>Why it exists</h2>
      <p>
        Many tools in healthcare operations are optimized for vendor velocity rather than operational
        durability. Ordinis is built with a different posture: correctness first, stability second,
        and features only when they serve those goals.
      </p>

      <h2>Location</h2>
      <p>Florence, South Carolina.</p>

      <div className="rule" />

      <p className="small">
        Next: add a short founder statement and a one-paragraph “how we work” section.
      </p>
    </div>
  );
}
