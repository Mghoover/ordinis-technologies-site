import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Integrative Health Solutions Case Study | Ordinis Technologies',
  description:
    'How Ordinis delivered a search-optimized, performance-focused website platform for Integrative Health Solutions.',
  alternates: {
    canonical:
      'https://ordinistechnologies.com/digital-services/case-study-integrative-health-solutions/',
  },
};

export default function IntegrativeHealthSolutionsCaseStudyPage() {
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/digital-services', label: 'Digital Services' },
          { label: 'Integrative Health Solutions Case Study' },
        ]}
      />

      <div className="kicker">Case Study</div>
      <h1>Integrative Health Solutions</h1>
      <p className="lede">
        Integrative Health Solutions partnered with Ordinis to replace a slow, fragmented clinic
        website with a technically disciplined platform engineered for patient discoverability and
        operational clarity.
      </p>

      <section>
        <h2>Problem</h2>
        <p>
          The clinic&apos;s previous site had weak local search performance, inconsistent service page
          templates, and poor mobile speed. High-intent visitors were dropping before booking because
          key provider and treatment information was hard to locate and difficult to trust.
        </p>
        <ul className="list">
          <li>Service pages were not consistently structured for search interpretation</li>
          <li>Provider and location data appeared in multiple formats across the site</li>
          <li>Load times degraded user experience on mobile networks</li>
          <li>Publishing updates required manual work across disconnected page layouts</li>
        </ul>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          Ordinis delivered a new website architecture centered on indexable service templates, clear
          location and provider pathways, and a maintainable content model for internal operations.
        </p>
        <ul className="list">
          <li>Template-driven service pages aligned to a durable taxonomy</li>
          <li>Unified provider and clinic location structures for consistency</li>
          <li>Performance-optimized frontend rendering and asset delivery</li>
          <li>Editorial workflows designed for repeatable, low-friction updates</li>
        </ul>
      </section>

      <section>
        <h2>Technical approach</h2>
        <p>
          The project emphasized long-term technical posture over short-term visual churn. We built
          stable page primitives that support ongoing SEO, accurate content governance, and scalable
          growth as the clinic expands services.
        </p>
        <div className="callout">
          <p className="small">
            Strategy and implementation were treated as one system: crawlable structure, fast
            delivery, and operationally reliable publishing.
          </p>
        </div>
        <ul className="list">
          <li>Semantic page composition with predictable heading and metadata hierarchy</li>
          <li>Structured data support for medical services, providers, and business entities</li>
          <li>Route and template patterns designed for clean static export deployment</li>
          <li>Analytics instrumentation mapped to patient-intent actions</li>
        </ul>
      </section>

      <section>
        <h2>Result summary</h2>
        <p>
          Integrative Health Solutions now operates on a website platform that is faster, easier to
          maintain, and better aligned with how prospective patients search for care.
        </p>
        <ul className="list">
          <li>Improved technical SEO posture across service and location pages</li>
          <li>Higher mobile usability through stronger page performance</li>
          <li>Clearer patient pathways from search discovery to contact conversion</li>
          <li>Reduced operational overhead for ongoing content and service updates</li>
        </ul>
        <div className="btnRow">
          <Link className="btn btnPrimary" href="/contact">
            Discuss your website
          </Link>
          <Link className="btn" href="/digital-services">
            Back to Digital Services
          </Link>
        </div>
      </section>
    </div>
  );
}
