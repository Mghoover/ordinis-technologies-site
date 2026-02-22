import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Security posture and data ownership principles.',
};

export default function SecurityPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Security' }]} />
      <div className="kicker">Data & Privacy</div>
      <h1>Security</h1>
      <p className="lede">
        Ordinis is built with a security posture that favors explicit boundaries, data ownership, and
        observability over opaque convenience.
      </p>

      <div className="rule" />

      <h2>Principles</h2>
      <ul className="list">
        <li>Data ownership is treated as a requirement, not a slogan.</li>
        <li>Encryption at rest is assumed for sensitive local datasets.</li>
        <li>Auditability is designed into change surfaces.</li>
        <li>No hidden monetization model tied to patient data.</li>
      </ul>

      <div className="rule" />

      <p className="small">
        This page is a placeholder scaffold; expand with concrete statements as your implementation
        details and hosting model are finalized.
      </p>
    </div>
  );
}
