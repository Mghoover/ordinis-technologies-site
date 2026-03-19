import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Web Design & EHR Software | Florence SC | Ordinis Technologies',
  description:
    'Custom websites and practice management software in Florence, SC. Build your business with Ordinis Technologies. Request a demo today.',
  path: '/',
  keywords: [
    'web design Florence SC',
    'Florence SC web developer',
    'practice management software',
    'EHR software Florence SC',
    'custom websites for local businesses',
    'Ordinis Technologies',
  ],
});

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ordinis Technologies',
  image: siteConfig.logoUrl,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Florence',
    addressRegion: 'SC',
    addressCountry: 'US',
  },
  areaServed: 'Florence SC',
  sameAs: [],
};

export default function HomePage() {
  return (
    <div className="container">
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="kicker">Florence, SC Web Design + Healthcare Software</div>
      <h1>Custom Websites &amp; Practice Management Software in Florence, SC</h1>
      <p className="lede">
        Ordinis Technologies builds high-performance websites for local businesses and develops
        next-generation practice management software for healthcare providers. Whether you need more
        customers or better systems, we build tools that actually work in the real world.
      </p>

      <div className="btnRow">
        <Link className="btn btnPrimary" href="/contact">
          Request a Demo
        </Link>
        <Link className="btn" href="/digital-services">
          View Our Work
        </Link>
      </div>
      <p className="small contactDetails">
        <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
        <span>{siteConfig.shortLocation}</span>
        <a href={siteConfig.emailHref}>{siteConfig.email}</a>
      </p>

      <section>
        <h2>Primary Pages</h2>
        <p>
          Ordinis Technologies delivers two core capabilities: powerful healthcare software and
          high-performance websites for local businesses.
        </p>
        <p>
          Every page is designed to convert visitors, answer questions, and establish trust.
        </p>
        <div className="grid">
          <div className="featureGrid">
            <div className="featureCard">
              <h3>Fast websites that sell</h3>
              <p>
                We design service pages, landing pages, and local SEO content that help Florence-area
                businesses get found and turn visits into calls.
              </p>
            </div>
            <div className="featureCard">
              <h3>Software that supports care</h3>
              <p>
                Core Practice is built for clinics that need scheduling, documentation, billing, and
                reporting in one dependable workflow.
              </p>
            </div>
          </div>
          <aside className="card">
            <h3>Navigation</h3>
            <ul className="list">
              <li>
                <Link href="/core-practice">Core Practice</Link> — Practice management and EHR
                platform
              </li>
              <li>
                <Link href="/digital-services">Digital Services</Link> — Websites, hosting, and
                automation
              </li>
              <li>
                <Link href="/architecture">Architecture</Link> — System design and scalability
              </li>
              <li>
                <Link href="/security">Security</Link> — HIPAA-conscious infrastructure
              </li>
              <li>
                <Link href="/company">Company</Link> — Mission and direction
              </li>
              <li>
                <Link href="/contact">Contact</Link> — Start a conversation or request a demo
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section>
        <h2>What Ordinis is built to do</h2>
        <div className="featureGrid">
          <div className="featureCard">
            <h3>Win more local business</h3>
            <p>
              Better structure, faster load times, and stronger calls to action create websites that
              work harder than generic brochure pages.
            </p>
          </div>
          <div className="featureCard">
            <h3>Reduce operational drag</h3>
            <p>
              We replace fragile workflows with software that keeps teams organized, accountable,
              and faster at the point of work.
            </p>
          </div>
          <div className="featureCard">
            <h3>Support long-term growth</h3>
            <p>
              Hosting, architecture, automation, and security are handled with the same discipline
              as the front-end experience.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>See What Your Business Could Look Like</h2>
        <p>
          We build live demo websites for local businesses so you can see exactly what you&apos;re
          getting before making a decision.
        </p>
        <p>No pressure. No commitment. Just results.</p>
        <div className="btnRow">
          <Link className="btn btnPrimary" href="/contact">
            Request Your Demo Site
          </Link>
        </div>
        <p className="small contactDetails">
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <span>{siteConfig.shortLocation}</span>
          <a href={siteConfig.emailHref}>{siteConfig.email}</a>
        </p>
      </section>

      <section>
        <h2>Serving Florence, South Carolina</h2>
        <p>
          We work with businesses throughout Florence, SC and surrounding areas, providing:
        </p>
        <ul className="list">
          <li>Website design for local businesses</li>
          <li>SEO optimization</li>
          <li>Hosting and performance optimization</li>
          <li>Custom software solutions</li>
        </ul>
        <p>If you&apos;re searching for a web developer in Florence, SC — you&apos;re in the right place.</p>
      </section>
    </div>
  );
}
