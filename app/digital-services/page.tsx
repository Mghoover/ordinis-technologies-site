import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Digital Services | Ordinis Technologies',
  description:
    'Search-optimized websites engineered for businesses that need measurable visibility, trustworthy performance, and long-term maintainability.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/digital-services/',
  },
};

export default function DigitalServicesPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Digital Services' }]} />

      <div className="kicker">Digital Services</div>
      <h1>
        Search-optimized websites engineered for businesses that need measurable visibility,
        trustworthy performance, and long-term maintainability.
      </h1>
      <p className="lede">
        Ordinis builds high-trust web platforms for organizations that need a modern, reliable web
        presence without sacrificing technical control, performance, or operational clarity.
      </p>

      <section>
        <h2>Who This Is For</h2>
        <p>
          Ordinis Digital Services supports organizations that need a modern, reliable web presence
          without agency complexity.
        </p>
        <ul className="list">
          <li>Local retail businesses</li>
          <li>Restaurants and cafes</li>
          <li>Professional services</li>
          <li>Medical and wellness practices</li>
          <li>Specialty boutiques and vendors</li>
        </ul>
      </section>

      <section>
        <h2>What We Build</h2>
        <p>
          Digital Services focuses on durable business websites that can be maintained over time and
          measured against real operating needs.
        </p>
        <ul className="list">
          <li>Search-optimized business websites</li>
          <li>Modern redesigns of outdated sites</li>
          <li>Landing pages for new businesses</li>
          <li>Hosting and long-term maintenance</li>
          <li>Performance and reliability optimization</li>
        </ul>
      </section>

      <section>
        <h2>Why technical architecture matters</h2>
        <p>
          Business websites are operational systems, not brochure pages. They need to present
          services clearly, support local discoverability, load quickly, and remain maintainable as
          the business changes.
        </p>
        <div className="callout">
          <p className="small">
            Ranking performance and long-term usability depend on disciplined structure: page
            speed, crawl paths, clean templates, and publishing patterns that do not decay over
            time.
          </p>
        </div>
        <ul className="list">
          <li>Technical SEO foundations built into architecture, not added after launch</li>
          <li>Performance-focused frontend delivery for strong Core Web Vitals outcomes</li>
          <li>Clear information architecture for services, locations, and lead pathways</li>
          <li>Operationally maintainable publishing flows for internal teams</li>
        </ul>
      </section>

      <section>
        <h2>Local First</h2>
        <p>
          Ordinis Technologies operates from Florence, South Carolina and works directly with
          regional businesses that want reliable technology without relying on large agencies. Many
          projects begin as demonstration builds so owners can evaluate the concept before
          committing.
        </p>
      </section>

      <section>
        <h2>Case Study</h2>
        <p>
          Healthcare remains a specialty area within Digital Services. See how Ordinis rebuilt a
          medical group website for stronger search visibility, faster performance, and cleaner
          operational publishing.
        </p>
        <div className="btnRow">
          <Link
            className="btn btnPrimary"
            href="/digital-services/case-study-integrative-health-solutions"
          >
            Read Integrative Health Solutions case study
          </Link>
        </div>
      </section>

      <section>
        <h2>Contact Ordinis</h2>
        <p>
          If your organization needs a technically sound website platform with durable search
          visibility, we can scope the architecture and delivery plan.
        </p>
        <div className="btnRow">
          <Link className="btn btnPrimary" href="/contact">
            Request a consultation
          </Link>
          <Link className="btn" href="/architecture">
            Review architecture posture
          </Link>
        </div>
      </section>

      <p className="small">
        Healthcare and clinical practices remain a specialty area due to Ordinis&apos;s work
        developing clinical operations infrastructure.
      </p>
    </div>
  );
}
