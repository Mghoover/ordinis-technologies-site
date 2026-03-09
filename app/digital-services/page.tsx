import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Digital Services | Ordinis Technologies',
  description: 'Search-optimized websites engineered for medical practices.',
  alternates: {
    canonical: 'https://ordinistechnologies.com/digital-services/',
  },
};

export default function DigitalServicesPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Digital Services' }]} />

      <div className="kicker">Digital Services</div>
      <h1>Search-optimized websites for medical practices.</h1>
      <p className="lede">
        Ordinis builds high-trust web platforms for healthcare organizations that need discoverable
        patient access without sacrificing technical control, performance, or operational clarity.
      </p>

      <section>
        <h2>What Digital Services means at Ordinis</h2>
        <p>
          Digital Services is our website engineering practice for clinics, specialty groups, and
          healthcare operators. We design and build fast, search-optimized web properties that align
          with how medical organizations actually operate.
        </p>
        <ul className="list">
          <li>Technical SEO foundations built into architecture, not added after launch</li>
          <li>Performance-focused frontend delivery for strong Core Web Vitals outcomes</li>
          <li>Clear information architecture for services, providers, and patient pathways</li>
          <li>Operationally maintainable publishing flows for internal teams</li>
        </ul>
      </section>

      <section>
        <h2>Why medical websites require technical architecture</h2>
        <p>
          Medical websites are operational systems, not brochure pages. They must present regulated
          service information accurately, support location and provider discoverability, and remain
          usable during high-intent patient journeys.
        </p>
        <div className="callout">
          <p className="small">
            In healthcare, content quality and ranking performance depend on disciplined structure:
            schema, crawl paths, page speed, and clean indexable templates.
          </p>
        </div>
        <ul className="list">
          <li>Structured service content and taxonomy that search engines can interpret</li>
          <li>Consistent technical templates to avoid index fragmentation over time</li>
          <li>Architecture that supports multi-location and multi-specialty growth</li>
          <li>Reliable analytics surfaces for measuring lead quality and intent</li>
        </ul>
      </section>

      <section>
        <h2>Ideal clients</h2>
        <ul className="list">
          <li>Independent practices modernizing an outdated or underperforming website</li>
          <li>Specialty groups scaling to multiple providers and service lines</li>
          <li>Healthcare operators requiring stronger local search discoverability</li>
          <li>Teams that want engineering-grade execution, not template-based marketing builds</li>
        </ul>
      </section>

      <section>
        <h2>Case Study</h2>
        <p>
          See how Ordinis rebuilt a medical group website for stronger search visibility, faster
          performance, and cleaner operational publishing.
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
          If your practice needs a technically sound website platform with durable search visibility,
          we can scope the architecture and delivery plan.
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
    </div>
  );
}
