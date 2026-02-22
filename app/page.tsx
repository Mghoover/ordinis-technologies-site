import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <div className="kicker">Ordinis Technologies</div>
      <h1>Clinical infrastructure. Built to endure.</h1>
      <p className="lede">
        Ordinis Core Practice is an offline-first medical operations system built on ledger truth and
        operational discipline—designed for environments where integrity matters more than trend
        alignment.
      </p>

      <div className="btnRow">
        <Link className="btn btnPrimary" href="/core-practice">
          View Core Practice
        </Link>
        <Link className="btn" href="/architecture">
          Read the Architecture
        </Link>
      </div>

      <div className="rule" />

      <div className="grid">
        <section>
          <h2>When you&apos;re done with churn.</h2>
          <p>
            Modern systems optimize for scale, surface-area, and recurring migrations. Ordinis
            optimizes for control, clarity, and longevity.
          </p>
          <ul className="list">
            <li>Offline-first workflows with explicit sync boundaries</li>
            <li>Ledger-based accounting primitives, not UI-driven totals</li>
            <li>Deterministic data modeling and auditable change history</li>
            <li>Operational tooling built by an operator, for operators</li>
          </ul>
        </section>

        <aside className="card">
          <h3>Primary pages</h3>
          <p className="small">
            The site is structured to read like documentation—quiet, specific, and stable.
          </p>
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
          </ul>
        </aside>
      </div>
    </div>
  );
}
