import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Core Practice',
  description: 'Ordinis Core Practice overview.',
};

export default function CorePracticePage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Core Practice' }]} />
      <div className="kicker">Product</div>
      <h1>Ordinis Core Practice</h1>
      <p className="lede">
        An offline-first medical operations system built on ledger truth. This page is intentionally
        concise for now; expand it as features and positioning lock in.
      </p>

      <div className="rule" />

      <h2>What it focuses on</h2>
      <ul className="list">
        <li>Clinical documentation workflows designed for clarity</li>
        <li>Scheduling and patient operations that remain usable offline</li>
        <li>Ledger-driven billing and reconciliation surfaces</li>
        <li>Reporting that derives from events, not UI assumptions</li>
      </ul>

      <div className="rule" />

      <p className="small">
        Next: add a “Capabilities” section and a simple, non-markety implementation inquiry path.
      </p>
    </div>
  );
}
