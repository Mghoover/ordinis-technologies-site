import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'System Architecture & Scalability | Ordinis',
  description:
    'Scalable system architecture for healthcare software and business websites. Review the Ordinis approach and request a demo.',
  path: '/architecture/',
  keywords: [
    'system architecture',
    'software scalability',
    'web architecture Florence SC',
    'healthcare software architecture',
    'application infrastructure design',
    'Ordinis Technologies architecture',
  ],
});

export default function ArchitecturePage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Architecture' }]} />

      <div className="kicker">System Design</div>
      <h1>Architecture that supports growth instead of creating cleanup later.</h1>
      <p className="lede">
        Ordinis Technologies designs systems to stay fast, clear, and maintainable as the business
        grows. That applies to both customer-facing websites and healthcare software where uptime,
        data integrity, and operational clarity matter every day.
      </p>

      <section>
        <h2>What architecture means in practice</h2>
        <p>
          Good architecture is not abstract. It determines how quickly pages load, how easily new
          features can be added, how safely data moves through the system, and how expensive future
          changes become. We build with that downstream reality in mind from day one.
        </p>
      </section>

      <section>
        <h2>Our design priorities</h2>
        <div className="featureGrid">
          <div className="featureCard">
            <h3>Performance first</h3>
            <p>
              Lean front ends, clean data flow, and efficient delivery reduce friction for users and
              improve search visibility.
            </p>
          </div>
          <div className="featureCard">
            <h3>Operational clarity</h3>
            <p>
              Systems should be understandable. We favor explicit models, disciplined structure, and
              fewer moving parts where possible.
            </p>
          </div>
          <div className="featureCard">
            <h3>Scalability with control</h3>
            <p>
              Sites and applications should be able to grow in content, traffic, and functionality
              without forcing a rebuild every year.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>How this applies to websites and healthcare software</h2>
        <ul className="list">
          <li>Service pages, location pages, and conversion flows built on reusable patterns</li>
          <li>Clear content architecture that supports SEO, editing, and future expansion</li>
          <li>Structured data and metadata strategies that align with how search engines read pages</li>
          <li>Security-conscious boundaries for systems that handle sensitive information</li>
          <li>Infrastructure choices that match real traffic, real teams, and real maintenance needs</li>
        </ul>
      </section>

      <section>
        <h2>Why clients care about architecture</h2>
        <p>
          When architecture is weak, teams pay for it repeatedly through slow pages, duplicate work,
          brittle updates, and avoidable outages. When architecture is strong, the system becomes
          easier to scale, easier to secure, and easier to trust.
        </p>
        <p>
          That is the standard we build toward at Ordinis. The goal is not complexity for its own
          sake. The goal is dependable systems that support real operations.
        </p>
      </section>

      <ContactCta
        title="Need a stronger technical foundation?"
        description="We can map the architecture for your website, internal platform, or healthcare system and show you the right next step."
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        secondaryHref="/security"
        secondaryLabel="Review Security"
      />
    </div>
  );
}
