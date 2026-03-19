import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Ordinis Technologies | Florence SC',
  description:
    'Learn how Ordinis Technologies builds websites and healthcare software from Florence, South Carolina. Start a conversation today.',
  path: '/company/',
  keywords: [
    'Ordinis Technologies',
    'Florence SC software company',
    'Florence SC web developer',
    'healthcare software company South Carolina',
    'custom website company Florence SC',
  ],
});

export default function CompanyPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Company' }]} />
      <div className="kicker">Company</div>
      <h1>Built in Florence, South Carolina for businesses and healthcare teams that need real results.</h1>
      <p className="lede">
        Ordinis Technologies helps organizations improve how they operate online and behind the
        scenes. We build custom websites for local businesses and practice management software for
        healthcare providers that need dependable systems, not disposable projects.
      </p>

      <section>
        <h2>What drives the company</h2>
        <p>
          The goal is straightforward: deliver technology that is clear, fast, and useful in the
          real world. That means sharper websites for customer acquisition, cleaner systems for
          operations, and architecture that can support growth without constant rework.
        </p>
      </section>

      <section>
        <h2>Where we focus</h2>
        <ul className="list">
          <li>Web design, hosting, SEO, and automation for local businesses</li>
          <li>Practice management software and EHR workflows for healthcare providers</li>
          <li>Technical architecture and infrastructure decisions that scale responsibly</li>
          <li>Security-conscious implementations for sensitive or business-critical systems</li>
        </ul>
      </section>

      <section>
        <h2>How we work</h2>
        <p>
          Ordinis keeps projects direct and accountable. We focus on what will improve outcomes,
          remove unnecessary complexity, and produce an asset your team can actually use.
        </p>
      </section>

      <ContactCta
        title="Want to see if Ordinis is the right fit?"
        description="Tell us what you need to improve and we will recommend the clearest path forward."
        primaryHref="/contact"
        primaryLabel="Contact Ordinis"
        secondaryHref="/digital-services"
        secondaryLabel="View Services"
      />
    </div>
  );
}
