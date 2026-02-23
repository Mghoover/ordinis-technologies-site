import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Security | Ordinis Technologies',
  description: 'Security posture and data ownership principles for Ordinis systems.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/security/',
  },
};

export default function SecurityPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Security' }]} />
      <div className="kicker">Data & Privacy</div>
      <h1>Security</h1>
      <p className="lede">
        Ordinis is implemented with a security posture that enforces explicit access boundaries,
        durable encryption controls, and observable system behavior.
      </p>

      <section>
        <h2>Principles</h2>
        <ul className="list">
          <li>Data ownership is contractual and architectural, not marketing language.</li>
          <li>Encryption at rest is standard for sensitive local and synchronized datasets.</li>
          <li>Auditability is built directly into high-impact data mutation surfaces.</li>
          <li>Operational access follows least-privilege expectations and explicit review paths.</li>
        </ul>
      </section>

      <section>
        <h2>Design intent</h2>
        <p>
          Security controls are designed to reduce silent drift and preserve trust in the record.
          Every control decision is evaluated against operational continuity and accountability.
        </p>
      </section>
    </div>
  );
}
