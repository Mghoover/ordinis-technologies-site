import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Florence SC Web Design | Ordinis Technologies',
  description:
    'Custom web design in Florence, SC for businesses that need better visibility and more leads. Request your demo site today.',
  path: '/florence-sc-web-design/',
  keywords: [
    'Florence SC web design',
    'web developer Florence SC',
    'website design for local businesses',
    'SEO Florence South Carolina',
    'custom business websites Florence SC',
    'Ordinis Technologies Florence SC',
  ],
});

export default function FlorenceScWebDesignPage() {
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/digital-services', label: 'Digital Services' },
          { label: 'Florence SC Web Design' },
        ]}
      />

      <div className="kicker">Local SEO Page</div>
      <h1>Web design in Florence, SC for businesses that need more than a basic website.</h1>
      <p className="lede">
        A strong website should help your business get found, explain what you do quickly, and move
        visitors toward a phone call, form submission, or booked appointment. Ordinis Technologies
        builds custom websites in Florence, South Carolina for businesses that want better
        performance, better search visibility, and a cleaner digital presence overall.
      </p>

      <section>
        <h2>Why local businesses in Florence need a stronger site</h2>
        <p>
          Many small business websites fail for the same reasons. They load slowly, bury the core
          service offer, and use generic page structures that do not match how customers actually
          search. That creates friction at the exact moment someone is deciding whether to trust your
          business. A website is often the first sales conversation you have with a customer, and it
          needs to do its job immediately.
        </p>
        <p>
          Ordinis focuses on the fundamentals that directly affect outcomes: clear messaging, local
          search relevance, dependable performance, strong calls to action, and page architecture
          that can scale as your business grows. Whether you are a contractor, clinic, law office,
          restaurant, service provider, or retail business in Florence, SC, the goal is the same.
          Your site should make it easy for the right customer to understand what you offer and take
          the next step.
        </p>
      </section>

      <section>
        <h2>What is included in a Florence, SC web design project</h2>
        <ul className="list">
          <li>Custom page structure built around your services, not a one-size-fits-all template</li>
          <li>Search-friendly metadata, headings, internal links, and crawlable content</li>
          <li>Mobile-first layouts that load fast and stay usable on real devices</li>
          <li>Hosting, maintenance, and performance support after launch</li>
          <li>Clear conversion paths for calls, forms, quote requests, or bookings</li>
        </ul>
        <p>
          The difference is discipline. We do not just make a site look better. We organize it so
          that customers can move through it without hesitation and search engines can understand it
          without guessing.
        </p>
      </section>

      <section>
        <h2>Built for visibility, speed, and trust</h2>
        <p>
          Search engine optimization works best when it starts with the site structure itself.
          Instead of bolting SEO on after launch, Ordinis builds it into the foundation. That means
          service pages with clear intent, local references that belong there naturally, internal
          links that help both users and search engines, and page performance that supports stronger
          engagement instead of driving visitors away.
        </p>
        <p>
          Trust also matters. Customers want to know who you are, where you are, what you do, and
          how to reach you. We make those answers easy to find. For Florence-area businesses, that
          local clarity can be the difference between a site that gets ignored and one that turns
          traffic into real conversations.
        </p>
      </section>

      <section>
        <h2>Why work with Ordinis Technologies</h2>
        <p>
          Ordinis is based in Florence, South Carolina and works directly with businesses that want
          a site built for real-world use. You are not buying a bloated agency process. You are
          getting a technical partner who understands page speed, local search, hosting, automation,
          and conversion strategy as one connected system.
        </p>
        <p>
          We also offer live demo builds. That means you can review the structure and direction of
          your site before committing to a full rollout. It is a practical way to reduce uncertainty
          and make sure the end product matches what your business actually needs.
        </p>
        <div className="btnRow">
          <Link className="btn" href="/digital-services">
            View Digital Services
          </Link>
          <Link className="btn" href="/contact">
            Start Your Project
          </Link>
        </div>
      </section>

      <ContactCta
        title="Want to see a better website before you buy one?"
        description="Request a custom demo site and see how Ordinis would position your business for Florence, SC search traffic and stronger conversion."
        primaryHref="/contact"
        primaryLabel="Request Your Demo Site"
        secondaryHref="/digital-services"
        secondaryLabel="View Our Work"
      />
    </div>
  );
}
