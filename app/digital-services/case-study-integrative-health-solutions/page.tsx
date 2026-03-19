import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactCta } from '@/components/ContactCta';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Healthcare Website Case Study | Ordinis',
  description:
    'See how Ordinis improved healthcare website speed, structure, and conversion paths. Review the case study and request a demo.',
  path: '/digital-services/case-study-integrative-health-solutions/',
  keywords: [
    'healthcare website case study',
    'medical website redesign',
    'SEO case study for clinic website',
    'website performance optimization',
    'Ordinis Technologies case study',
  ],
});

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
        Integrative Health Solutions needed a website that loaded faster, ranked better, and gave
        patients a clearer path to take action. Ordinis rebuilt the platform around cleaner page
        structure, stronger technical SEO, and conversion-focused content.
      </p>

      <section>
        <h2>The challenge</h2>
        <p>
          The previous site made it difficult for patients to find services, trust the information,
          and move toward booking. Page speed was weak, structure was inconsistent, and important
          service content lacked the clarity needed for both search engines and visitors.
        </p>
        <ul className="list">
          <li>Important service pages were not consistently structured</li>
          <li>Mobile performance was hurting user experience</li>
          <li>Publishing updates required too much manual cleanup</li>
          <li>Conversion paths were unclear across key pages</li>
        </ul>
      </section>

      <section>
        <h2>The solution</h2>
        <p>
          Ordinis delivered a cleaner website system with reusable page patterns, faster rendering,
          and stronger information hierarchy. The result was a site that became easier to maintain
          internally while also improving how patients discovered and navigated services.
        </p>
        <div className="featureGrid">
          <div className="featureCard">
            <h3>Technical SEO cleanup</h3>
            <p>Service pages, metadata, and internal links were aligned for stronger search visibility.</p>
          </div>
          <div className="featureCard">
            <h3>Faster performance</h3>
            <p>Front-end delivery and asset handling were improved to support better mobile usability.</p>
          </div>
          <div className="featureCard">
            <h3>Clearer conversion flow</h3>
            <p>Patients could move from discovery to contact without fighting the page structure.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>The outcome</h2>
        <p>
          The clinic finished with a stronger digital foundation: a website that was easier to grow,
          easier to trust, and better aligned with how real patients search for care.
        </p>
        <div className="btnRow">
          <Link className="btn" href="/digital-services">
            Back to Digital Services
          </Link>
          <Link className="btn" href="/florence-sc-web-design">
            Read more about Florence web design
          </Link>
        </div>
      </section>

      <ContactCta
        title="Need a website overhaul that improves performance and leads?"
        description="We can show you what a better site structure looks like before you commit to a full project."
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        secondaryHref="/contact"
        secondaryLabel="Discuss Your Website"
      />
    </div>
  );
}
