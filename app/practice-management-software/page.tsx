import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Practice Management Software | Ordinis',
  description:
    'Practice management software for clinics that need speed, reliability, and cleaner workflows. Request a live demo from Ordinis.',
  path: '/practice-management-software/',
  keywords: [
    'practice management software',
    'medical practice software',
    'EHR platform for clinics',
    'healthcare software Florence SC',
    'clinic scheduling billing documentation software',
    'Ordinis practice management software',
  ],
});

export default function PracticeManagementSoftwarePage() {
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/core-practice', label: 'Core Practice' },
          { label: 'Practice Management Software' },
        ]}
      />

      <div className="kicker">Healthcare SEO Page</div>
      <h1>Practice management software that helps clinics run faster and stay organized.</h1>
      <p className="lede">
        Ordinis Technologies builds practice management software for clinics that need scheduling,
        charting, billing, and reporting to work together without constant friction. The goal is
        simple: fewer bottlenecks for staff, clearer data for leadership, and a more dependable
        system for everyday patient operations.
      </p>

      <section>
        <h2>Most clinics do not need more software noise</h2>
        <p>
          They need fewer disconnected workflows. When front-desk scheduling lives in one tool,
          documentation in another, and billing cleanup in a third, the result is predictable:
          duplicated work, inconsistent data, slower collections, and frustrated staff. Practice
          management software should reduce complexity, not create more of it.
        </p>
        <p>
          That is the posture behind Ordinis Core Practice. We build around the actual path of work
          inside a clinic. Patients are scheduled, checked in, documented, billed, followed up on,
          and reported on. The system should support that flow directly instead of forcing the team
          to maintain gaps between tools.
        </p>
      </section>

      <section>
        <h2>What the platform supports</h2>
        <ul className="list">
          <li>Appointment scheduling and calendar management</li>
          <li>Patient charting and structured clinical documentation</li>
          <li>Charges, payments, adjustments, and clearer revenue tracking</li>
          <li>Operational reporting for volume, activity, and financial review</li>
          <li>Scalable workflows for growing clinics and multi-provider organizations</li>
        </ul>
        <p>
          Each part of the platform is built to support real operations. That means fast interfaces,
          clean relationships between records, and reporting that stays useful instead of becoming a
          monthly cleanup project.
        </p>
      </section>

      <section>
        <h2>Designed for reliability and long-term use</h2>
        <p>
          Healthcare teams work under pressure. Software has to stay understandable and dependable
          when the day gets busy. Ordinis favors stable workflows, explicit data handling, and
          architecture that can support change without turning every update into a disruption.
        </p>
        <p>
          This matters for security too. Practice management software often touches sensitive data,
          financial activity, and operational records that need clear controls. Ordinis builds with
          HIPAA-conscious infrastructure and a technical posture that values accountability over
          shortcuts.
        </p>
      </section>

      <section>
        <h2>Built in Florence, SC with real clinic operations in mind</h2>
        <p>
          Ordinis Technologies is based in Florence, South Carolina. While the software is built to
          scale beyond one market, local context still matters. We understand that many clinics need
          practical improvements first: faster intake, clearer scheduling, cleaner collections, and
          better visibility into what is happening day to day.
        </p>
        <p>
          If your current platform is slowing the team down, making reporting harder, or leaving too
          much room for manual cleanup, this is the right time to review a stronger system. We can
          walk you through the workflow, the architecture, and how Core Practice fits your operating
          model.
        </p>
        <div className="btnRow">
          <Link className="btn" href="/core-practice">
            View Core Practice
          </Link>
          <Link className="btn" href="/chiropractic-software">
            Explore Chiropractic Software
          </Link>
        </div>
      </section>

      <ContactCta
        title="Ready to replace fragile clinic workflows?"
        description="Request a live demo of Ordinis Core Practice and review scheduling, charting, billing, and reporting in one system."
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        secondaryHref="/architecture"
        secondaryLabel="Review Architecture"
      />
    </div>
  );
}
