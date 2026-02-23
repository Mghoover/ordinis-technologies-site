import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ordinis Technologies | Infrastructure for Clinical Operations',
  description:
    'Clinical infrastructure engineered for control, stability, and long-term integrity.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/',
  },
};

export default function HomePage() {
  return (
    <div className="container">
      <div className="kicker">Ordinis Technologies</div>
      <h1>Infrastructure for Clinical Operations. Built to Endure.</h1>
      <p className="lede">
        Ordinis Core Practice is an offline-first clinical operations system grounded in ledger truth
        and operational discipline for environments where integrity outranks trend alignment.
      </p>

      <div className="btnRow">
        <Link className="btn btnPrimary" href="/core-practice">
          View Core Practice
        </Link>
        <Link className="btn" href="/architecture">
          Review Architecture
        </Link>
      </div>

      <section>
        <h2>Operational posture</h2>
        <p>
          Ordinis is designed for organizations that value reliability over novelty. The system
          emphasizes deterministic workflows, explicit boundaries, and data integrity under routine
          pressure.
        </p>
      </section>

      <section>
        <h2>Core commitments</h2>
        <ul className="list">
          <li>Offline-capable workflows with controlled synchronization boundaries</li>
          <li>Ledger-native accounting primitives and transparent reconciliation</li>
          <li>Stable data models engineered for long-term operational continuity</li>
          <li>Audit-oriented tooling that favors clarity over hidden automation</li>
        </ul>
      </section>

      <section>
        <h2>Primary pages</h2>
        <div className="grid">
          <div>
            <p className="small">
              The site reads as institutional documentation: concise, specific, and technically
              accountable.
            </p>
          </div>
          <aside className="card">
            <h3>Navigation</h3>
            <ul className="list">
              <li>
                <Link href="/core-practice">Core Practice</Link>
              </li>
              <li>
                <Link href="/architecture">Architecture</Link>
              </li>
              <li>
                <Link href="/security">Security</Link>
              </li>
              <li>
                <Link href="/company">Company</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
