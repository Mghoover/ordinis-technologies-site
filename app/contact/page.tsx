import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactIntakeForm } from '@/components/ContactIntakeForm';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Ordinis Technologies | Florence SC',
  description:
    'Call or email Ordinis Technologies for web design, hosting, or healthcare software. Request a demo from Florence, SC today.',
  path: '/contact/',
  keywords: [
    'contact Ordinis Technologies',
    'Florence SC web developer contact',
    'practice management software demo',
    'website design consultation Florence SC',
    'Ordinis contact information',
  ],
});

export default function ContactPage() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Contact' }]} />
      <div className="kicker">Contact</div>
      <h1>Request a demo or start a project.</h1>
      <p className="lede">
        Use the intake form below to tell us what you need, what is not working, and what outcome
        matters most. Ordinis Technologies reviews website, hosting, automation, and healthcare
        software requests from Florence, South Carolina and beyond.
      </p>

      <section>
        <h2>Direct contact</h2>
        <p>
          If you would rather skip the form, call or email directly and we will respond from there.
        </p>
        <ul className="list">
          <li>
            Phone: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          </li>
          <li>
            Email: <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          </li>
          <li>Location: Florence, South Carolina</li>
        </ul>
      </section>

      <ContactIntakeForm />

      <section>
        <h2>What to expect</h2>
        <p>
          Strong intake helps us respond with something useful instead of a generic reply. Share
          enough detail for us to understand the business context, the technical problem, and the
          next step you want to take.
        </p>
        <p>
          We can review website goals, lead-generation priorities, current infrastructure, or
          software workflow issues and recommend the clearest path forward.
        </p>
      </section>
    </div>
  );
}
