import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Architecture | Ordinis Technologies',
  description:
    'A plain-language description of the design principles behind Ordinis Core Practice.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/architecture/',
  },
};

export default function ArchitecturePage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Architecture' }]} />

      <div className="kicker">System Design</div>
      <h1>Architecture</h1>
      <p className="lede">
        Ordinis is built around a simple premise: in clinical operations, the system must be
        trustworthy by default. That means explicit data boundaries, deterministic accounting, and an
        offline-first posture that treats network access as optional—not assumed.
      </p>

      <div className="rule" />

      <section>
        <h2>System path</h2>
        <p>
          The architecture follows a narrow and explicit flow: interface input, ledger
          interpretation, model normalization, and encrypted persistence.
        </p>
        <figure className="diagram">
          <svg
            viewBox="0 0 760 140"
            role="img"
            aria-label="Architecture flow from user interface to encrypted storage"
          >
            <rect x="8" y="46" width="150" height="48" rx="3" fill="#f7f8f9" stroke="#3e4a58" />
            <text x="83" y="75" textAnchor="middle" fontSize="14" fill="#1f2933">
              UI
            </text>

            <line x1="160" y1="70" x2="220" y2="70" stroke="#5d6773" strokeWidth="1.5" />
            <polygon points="220,70 213,66 213,74" fill="#5d6773" />

            <rect x="228" y="46" width="170" height="48" rx="3" fill="#f7f8f9" stroke="#3e4a58" />
            <text x="313" y="75" textAnchor="middle" fontSize="14" fill="#1f2933">
              Ledger Engine
            </text>

            <line x1="400" y1="70" x2="460" y2="70" stroke="#5d6773" strokeWidth="1.5" />
            <polygon points="460,70 453,66 453,74" fill="#5d6773" />

            <rect x="468" y="46" width="150" height="48" rx="3" fill="#f7f8f9" stroke="#3e4a58" />
            <text x="543" y="75" textAnchor="middle" fontSize="14" fill="#1f2933">
              Data Model
            </text>

            <line x1="620" y1="70" x2="680" y2="70" stroke="#5d6773" strokeWidth="1.5" />
            <polygon points="680,70 673,66 673,74" fill="#5d6773" />

            <rect x="688" y="46" width="64" height="48" rx="3" fill="#f7f8f9" stroke="#3e4a58" />
            <text x="720" y="67" textAnchor="middle" fontSize="13" fill="#1f2933">
              Encrypted
            </text>
            <text x="720" y="84" textAnchor="middle" fontSize="13" fill="#1f2933">
              Storage
            </text>
          </svg>
          <figcaption>UI -&gt; Ledger Engine -&gt; Data Model -&gt; Encrypted Storage</figcaption>
        </figure>
      </section>

      <section>
        <h2>1) Ledger truth as a first principle</h2>
        <p>
          Financial reality is not a report. It is a sequence of events.
          Ordinis represents financial movement as a ledger of discrete, timestamped entries rather
          than as UI-level totals that can drift over time.
        </p>
        <div className="callout">
          <p className="small">
            A ledger model makes the system easier to audit, easier to reconcile, and harder to lie
            to—accidentally or otherwise.
          </p>
        </div>
        <ul className="list">
          <li>
            <strong>Events are authoritative.</strong> Reports are derived.
          </li>
          <li>
            <strong>Reconciliation is explicit.</strong> Adjustments are recorded as events, not
            silent overwrites.
          </li>
          <li>
            <strong>Totals are computed.</strong> They are never stored as the primary truth.
          </li>
        </ul>
      </section>

      <section>
        <h2>2) Offline-first, with explicit sync boundaries</h2>
        <p>
          Ordinis treats connectivity as a convenience. The working set of data is available locally
          and remains usable when the network is unavailable, slow, or inconsistent.
        </p>
        <p>
          Synchronization is a controlled process with clear rules: what syncs, when it syncs, and
          how conflicts are resolved. The goal is stability—not magical, silent background behavior.
        </p>
        <ul className="list">
          <li>
            <strong>Local durability:</strong> the clinic can operate without an always-on cloud.
          </li>
          <li>
            <strong>Bounded sync windows:</strong> prioritize operationally relevant time ranges.
          </li>
          <li>
            <strong>Conflict surfaces:</strong> where collisions occur, they are exposed for explicit
            resolution.
          </li>
        </ul>
      </section>

      <section>
        <h2>3) Deterministic accounting and reporting</h2>
        <p>
          “Looks right” is not a standard. Ordinis aims for deterministic outputs from deterministic
          inputs: the same data produces the same results, every time.
        </p>
        <table className="table" aria-label="Determinism principles">
          <thead>
            <tr>
              <th>Area</th>
              <th>Approach</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reporting</td>
              <td>Derived from ledger events with transparent formulas.</td>
            </tr>
            <tr>
              <td>Adjustments</td>
              <td>Recorded as new events rather than overwriting prior truth.</td>
            </tr>
            <tr>
              <td>Snapshots</td>
              <td>Stored only as signed/approved checkpoints when needed.</td>
            </tr>
          </tbody>
        </table>
        <p className="small">
          The goal is not to avoid complexity. The goal is to contain it and make it observable.
        </p>
      </section>

      <section>
        <h2>4) Separation of realities: projection vs. record</h2>
        <p>
          Ordinis separates what <em>has happened</em> from what <em>might happen</em>. Projections are
          useful, but they must never contaminate the record.
        </p>
        <ul className="list">
          <li>
            <strong>The record</strong> is composed of signed clinical notes, posted charges, payments,
            adjustments, and reconciled events.
          </li>
          <li>
            <strong>The projection</strong> is a forward-looking model that can be tuned, rerun, and
            improved without rewriting history.
          </li>
        </ul>
        <div className="callout">
          <p className="small">
            This is the operational equivalent of dev/prod discipline: experiment without breaking
            trust.
          </p>
        </div>
      </section>

      <section>
        <h2>5) Explicit boundaries: dev vs. production posture</h2>
        <p>
          Ordinis assumes that production data is authoritative and must be treated with care.
          Development work should be isolated from production environments, with clear guardrails to
          prevent accidental writes.
        </p>
        <ul className="list">
          <li>Environment segregation (dev/stage/prod) is treated as a design requirement.</li>
          <li>Migration paths are additive and reversible where possible.</li>
          <li>Auditing is built into data change surfaces.</li>
        </ul>
      </section>

      <section>
        <h2>6) Data model discipline: fewer primitives, more clarity</h2>
        <p>
          Systems become fragile when every screen invents its own meaning. Ordinis favors a small
          number of stable primitives—patients, encounters, charges, payments, adjustments, and
          ledger events—then derives the rest.
        </p>
        <pre aria-label="Example: event-first modeling">
{`ledger_event {
  id
  occurred_at
  type: "charge_posted" | "payment_received" | "adjustment_applied" | ...
  entity_type: "encounter" | "claim" | "statement" | ...
  entity_id
  amount
  metadata
}
`}</pre>
        <p className="small">
          The implementation details vary by subsystem, but the posture is consistent: record events,
          derive meaning, and keep the rules observable.
        </p>
      </section>

      <section>
        <h2>7) What this architecture is trying to prevent</h2>
        <p>
          Most operational pain comes from quiet drift: data that changes without anyone noticing,
          totals that don&apos;t reconcile, systems that only work when the internet behaves, and
          workflows that optimize for billing throughput while degrading clinical reality.
        </p>
        <ul className="list">
          <li>Silent overwrites and hidden recalculations</li>
          <li>Report-first accounting that can’t be audited</li>
          <li>Cloud dependency as a single point of failure</li>
          <li>“Magic sync” that hides conflict until it becomes a loss</li>
        </ul>
      </section>

      <div className="rule" />

      <section>
        <h2>In plain language</h2>
        <p>
          Ordinis is not trying to be loud. It is trying to be correct.
        </p>
        <p>
          If you are tired of system churn—migrations, UI rewrites, vendor pivots, and “new” features
          that feel like instability—Ordinis is built to wait. Quietly. Reliably.
        </p>
      </section>
    </div>
  );
}
