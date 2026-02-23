import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Company | Ordinis Technologies',
  description: 'Company profile and institutional posture of Ordinis Technologies.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/company/',
  },
};

export default function CompanyPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Company' }]} />
      <div className="kicker">About</div>
      <h1>Company</h1>
      <p className="lede">
        Ordinis Technologies builds clinical operations infrastructure with an emphasis on control,
        stability, and institutional longevity.
      </p>

      <section>
        <h2>Operating thesis</h2>
        <p>
          Healthcare operations software is frequently optimized for vendor velocity. Ordinis is
          engineered for correctness and continuity first, then selectively expanded where additional
          capability materially improves outcomes.
        </p>
      </section>

      <section>
        <h2>Location</h2>
        <p>Florence, South Carolina.</p>
      </section>
    </div>
  );
}
