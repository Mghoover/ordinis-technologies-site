import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Web Design Florence SC | Ordinis Technologies',
  description:
    'Professional website design in Florence, SC. Fast, modern, and built to convert. Get your custom demo site today.',
  path: '/digital-services/',
  keywords: [
    'web design Florence SC',
    'website design Florence South Carolina',
    'SEO services Florence SC',
    'business websites Florence SC',
    'hosting and website maintenance Florence SC',
    'Ordinis Technologies digital services',
  ],
});

export default function DigitalServicesPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Digital Services' }]} />

      <div className="kicker">Digital Services</div>
      <h1>High-performance websites for businesses that need more calls, leads, and trust.</h1>
      <p className="lede">
        Ordinis Technologies designs and builds websites for businesses in Florence, South Carolina
        and surrounding areas. Every site is structured to load fast, rank locally, and move
        visitors toward a clear next step.
      </p>

      <section>
        <h2>What we deliver</h2>
        <div className="featureGrid">
          <div className="featureCard">
            <h3>Custom website design</h3>
            <p>
              We build clean, modern sites around your services, audience, and sales goals instead
              of squeezing your business into a generic template.
            </p>
          </div>
          <div className="featureCard">
            <h3>Technical SEO foundations</h3>
            <p>
              Metadata, page structure, internal linking, and crawlable service pages are built in
              from the start.
            </p>
          </div>
          <div className="featureCard">
            <h3>Hosting and maintenance</h3>
            <p>
              We keep your site fast, secure, updated, and operational so it continues performing
              after launch.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Built for local businesses in Florence, SC</h2>
        <p>
          Restaurants, medical offices, contractors, service companies, and professional firms all
          need the same thing from their website: clarity, speed, and conversion. We focus on the
          pages that matter most so your site does real business, not just fill space online.
        </p>
        <ul className="list">
          <li>Service pages that explain what you do and why customers should choose you</li>
          <li>Location-aware SEO for Florence, SC search intent</li>
          <li>Calls to action built around phone calls, forms, bookings, or demo requests</li>
          <li>Site structure that can scale as your business adds services or locations</li>
        </ul>
      </section>

      <section>
        <h2>Our process is simple</h2>
        <p>
          We start by understanding what customers need to know before they call you. Then we build
          the pages, content, and technical foundation required to make that path obvious.
        </p>
        <div className="callout">
          <p className="small">
            Many projects start with a live demo build so you can see the direction before making a
            larger commitment.
          </p>
        </div>
        <div className="btnRow">
          <Link className="btn" href="/florence-sc-web-design">
            Read the Florence web design overview
          </Link>
          <Link
            className="btn"
            href="/digital-services/case-study-integrative-health-solutions"
          >
            View a healthcare website case study
          </Link>
        </div>
      </section>

      <ContactCta
        title="See your next website before you buy it"
        description="Request a custom demo site and review the structure, design direction, and local SEO approach before moving forward."
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        secondaryHref="/contact"
        secondaryLabel="Talk to Ordinis"
      />
    </div>
  );
}
