import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Practice Management Software & EHR | Ordinis',
  description:
    'Modern EHR and practice management software built for real clinics. Fast, reliable, and scalable. See Ordinis Core Practice.',
  path: '/core-practice/',
  keywords: [
    'practice management software',
    'EHR software',
    'clinic operations platform',
    'healthcare software Florence SC',
    'medical scheduling and billing software',
    'Ordinis Core Practice',
  ],
});

export default function CorePracticePage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Core Practice' }]} />
      <div className="kicker">Healthcare Software</div>
      <h1>Practice management software built for real clinics.</h1>
      <p className="lede">
        Ordinis Core Practice gives healthcare teams one system for scheduling, documentation,
        billing, and reporting. It is designed for clinics that need speed at the front desk,
        clarity in the record, and dependable performance over time.
      </p>

      <section>
        <h2>What Core Practice handles</h2>
        <div className="featureGrid">
          <div className="featureCard">
            <h3>Scheduling and patient flow</h3>
            <p>
              Book appointments, manage provider calendars, and keep daily operations moving
              without juggling disconnected tools.
            </p>
          </div>
          <div className="featureCard">
            <h3>Documentation and charting</h3>
            <p>
              Capture the record with structured workflows that support continuity, compliance, and
              easier reporting later.
            </p>
          </div>
          <div className="featureCard">
            <h3>Billing and reconciliation</h3>
            <p>
              Track charges, payments, and adjustments with a ledger-minded posture that makes
              revenue activity easier to review and trust.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Why clinics choose Ordinis</h2>
        <ul className="list">
          <li>One platform instead of a stack of tools that fight each other</li>
          <li>Stable workflows that support staff training and long-term continuity</li>
          <li>Scalable architecture for multi-provider practices and growing organizations</li>
          <li>HIPAA-conscious infrastructure and explicit security boundaries</li>
        </ul>
      </section>

      <section>
        <h2>Built for the reality of healthcare operations</h2>
        <p>
          Most clinics do not need flashy software. They need fewer bottlenecks, cleaner data, and
          systems that stay usable under pressure. Core Practice is built with that mindset first.
        </p>
        <p>
          If your team is dealing with duplicated entry, unclear financial reporting, or software
          that creates more cleanup than momentum, we can show you a better operating model.
        </p>
        <div className="btnRow">
          <Link className="btn" href="/practice-management-software">
            Explore the full platform overview
          </Link>
          <Link className="btn" href="/chiropractic-software">
            See chiropractic-specific workflows
          </Link>
        </div>
      </section>

      <ContactCta
        title="See Core Practice in action"
        description="Request a live demo to review workflows, reporting, and system fit for your clinic."
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        secondaryHref="/architecture"
        secondaryLabel="Review Architecture"
      />
    </div>
  );
}
