import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Chiropractic Software | Ordinis Technologies',
  description:
    'Chiropractic software for scheduling, documentation, billing, and patient operations. Request a demo from Ordinis today.',
  path: '/chiropractic-software/',
  keywords: [
    'chiropractic software',
    'chiropractic practice management software',
    'chiropractic EHR',
    'chiropractor software Florence SC',
    'billing and documentation software for chiropractors',
    'Ordinis chiropractic software',
  ],
});

export default function ChiropracticSoftwarePage() {
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/core-practice', label: 'Core Practice' },
          { label: 'Chiropractic Software' },
        ]}
      />

      <div className="kicker">Chiropractic Software</div>
      <h1>Chiropractic software built for cleaner workflows, faster visits, and better follow-through.</h1>
      <p className="lede">
        Chiropractic practices need software that keeps the day moving. Scheduling, check-in,
        documentation, billing, and patient follow-up all have to work together if the office is
        going to stay efficient. Ordinis Technologies builds chiropractic software that helps
        practices reduce friction and operate with more confidence.
      </p>

      <section>
        <h2>What chiropractors need from software</h2>
        <p>
          In many practices, the biggest operational problems are not dramatic. They are repetitive.
          Staff re-enter information, notes become inconsistent, scheduling changes create confusion,
          and billing review takes longer than it should. That kind of drag compounds quickly in a
          busy office. A chiropractic platform should simplify the core visit cycle instead of
          scattering it across disconnected tools.
        </p>
        <p>
          Ordinis approaches chiropractic software with that operational reality in mind. The system
          is designed to support high-volume visit patterns, recurring appointments, documentation
          discipline, and cleaner financial visibility so teams can spend less time fighting the
          system and more time running the practice.
        </p>
      </section>

      <section>
        <h2>Core workflow support</h2>
        <ul className="list">
          <li>Scheduling that supports recurring patient visits and provider availability</li>
          <li>Documentation workflows for notes, visit tracking, and care continuity</li>
          <li>Billing and collections support with clearer revenue activity</li>
          <li>Operational reporting for appointments, production, and follow-up</li>
          <li>Scalable architecture for growing offices or multi-provider clinics</li>
        </ul>
        <p>
          The point is not to overload the team with features. It is to give the practice a clean
          operational backbone that stays understandable and dependable over time.
        </p>
      </section>

      <section>
        <h2>Built for real practices, not just software checklists</h2>
        <p>
          Many chiropractic offices need a platform that fits how they actually work day to day.
          That includes fast patient flow, repeatable note structures, clear handoffs between staff,
          and reporting that helps leadership spot issues before they become bigger revenue or
          workflow problems.
        </p>
        <p>
          Ordinis Technologies builds from Florence, South Carolina, but the same design principle
          applies anywhere: a practice runs better when the software is direct, stable, and aligned
          with the reality of patient operations. That means fewer moving parts, clearer interfaces,
          and a stronger technical foundation behind the scenes.
        </p>
      </section>

      <section>
        <h2>Why Ordinis is different</h2>
        <p>
          We do not treat chiropractic software like a generic business app with medical labels
          added later. We treat it as an operational system that has to support providers, staff,
          patient relationships, and revenue activity at the same time. That is why the platform
          focus includes architecture, security, reporting, and performance together.
        </p>
        <p>
          If your practice is outgrowing its current tools or carrying too much manual cleanup, we
          can show you a better path. Review the workflow, ask hard questions, and see how the
          system would fit before you make a decision.
        </p>
        <div className="btnRow">
          <Link className="btn" href="/practice-management-software">
            View Practice Software
          </Link>
          <Link className="btn" href="/contact">
            Talk with Ordinis
          </Link>
        </div>
      </section>

      <ContactCta
        title="Need software that fits your chiropractic workflow?"
        description="Request a demo to review scheduling, charting, billing, and reporting built for a faster, cleaner practice."
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        secondaryHref="/core-practice"
        secondaryLabel="See Core Practice"
      />
    </div>
  );
}
