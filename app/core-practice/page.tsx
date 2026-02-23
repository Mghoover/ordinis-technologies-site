import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Core Practice | Ordinis Technologies',
  description: 'Overview of Ordinis Core Practice and its operational design posture.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/core-practice/',
  },
};

export default function CorePracticePage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Core Practice' }]} />
      <div className="kicker">Product</div>
      <h1>Ordinis Core Practice</h1>
      <p className="lede">
        Core Practice is a clinical operations platform designed for durable day-to-day execution in
        environments where data quality and reconciliation standards are non-negotiable.
      </p>

      <section>
        <h2>What it supports</h2>
        <ul className="list">
          <li>Clinical documentation workflows designed for precision and continuity</li>
          <li>Scheduling and patient operations that remain usable during connectivity loss</li>
          <li>Ledger-native billing and reconciliation surfaces with explicit audit paths</li>
          <li>Reporting derived from event records instead of mutable interface totals</li>
        </ul>
      </section>

      <section>
        <h2>Operating model</h2>
        <p>
          Core Practice prioritizes predictable behavior, stable primitives, and explicit system
          boundaries. The objective is operational control across years of use, not novelty cycles.
        </p>
      </section>
    </div>
  );
}
