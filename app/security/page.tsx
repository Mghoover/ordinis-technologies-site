import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'HIPAA-Conscious Security | Ordinis Technologies',
  description:
    'Security-focused website and healthcare software infrastructure with clear controls and accountability. Talk with Ordinis today.',
  path: '/security/',
  keywords: [
    'HIPAA-conscious infrastructure',
    'healthcare software security',
    'secure website hosting Florence SC',
    'data protection and access control',
    'Ordinis Technologies security',
  ],
});

export default function SecurityPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Security' }]} />
      <div className="kicker">Security</div>
      <h1>Security is built into the system, not added after the fact.</h1>
      <p className="lede">
        Ordinis approaches security with clear boundaries, controlled access, and infrastructure
        decisions that respect operational risk. For healthcare software especially, that means
        building with accountability and data protection from the start.
      </p>

      <section>
        <h2>Security posture</h2>
        <ul className="list">
          <li>Least-privilege access and role-aware permissions</li>
          <li>Encryption controls for sensitive data at rest and in transit</li>
          <li>Observable system activity for high-impact data changes</li>
          <li>Deployment and infrastructure practices that reduce unnecessary exposure</li>
        </ul>
      </section>

      <section>
        <h2>HIPAA-conscious by design</h2>
        <p>
          Not every project has the same compliance requirements, but healthcare systems need a
          higher standard of discipline. We design with that in mind by limiting access surfaces,
          keeping responsibilities explicit, and treating patient-related data with appropriate care.
        </p>
      </section>

      <section>
        <h2>Why this matters</h2>
        <p>
          Security failures usually start with avoidable ambiguity: too many tools, unclear access
          rules, or infrastructure that was never designed for sensitive workflows. Strong security
          posture reduces those weaknesses before they become operational problems.
        </p>
      </section>

      <ContactCta
        title="Need a secure foundation for your site or software?"
        description="We can review your current risk posture and show you a cleaner architecture for hosting, access control, and protected workflows."
        primaryHref="/contact"
        primaryLabel="Start the Conversation"
        secondaryHref="/contact"
        secondaryLabel="Request a Demo"
      />
    </div>
  );
}
