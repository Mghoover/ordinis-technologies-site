import type { Metadata } from 'next';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Web Design & Healthcare Software | Florence SC | Ordinis Technologies',
  description: 'Custom websites, business automation, and practice management software. Built in Florence, South Carolina, around the way your team actually works.',
  path: '/',
  keywords: ['web design Florence SC', 'healthcare software', 'practice management software', 'business automation', 'Ordinis Technologies'],
});

const businessSchema = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: siteConfig.name, image: siteConfig.logoUrl, url: siteConfig.url,
  telephone: siteConfig.phone, email: siteConfig.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Florence', addressRegion: 'SC', addressCountry: 'US' },
  sameAs: [siteConfig.facebookUrl, siteConfig.linkedinUrl],
};

export default function HomePage() {
  return (
    <div className="homePage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <section className="homeHero" aria-labelledby="home-title">
        <div className="heroCopy">
          <p className="kicker">Built in Florence, South Carolina</p>
          <h1 id="home-title">Technology that<br />works in practice.</h1>
          <p className="lede">Healthcare software, custom websites, and automation built around the people doing the work.</p>
          <div className="btnRow">
            <Link className="btn btnPrimary" href="/contact">Let&apos;s talk about your project <span aria-hidden="true">↗</span></Link>
            <a className="heroTextLink" href="#what-we-build">Explore what we build <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <aside className="heroAside" aria-label="Our focus">
          <p className="heroAsideTitle">Clear purpose. Practical systems.</p>
          <div><span className="index">01</span><p>Clinic operations<small>Scheduling, documentation, and financial workflows.</small></p></div>
          <div><span className="index">02</span><p>Business websites<small>A clear introduction. An easy next step.</small></p></div>
          <div><span className="index">03</span><p>Workflow automation<small>Less repetition in your everyday work.</small></p></div>
        </aside>
      </section>

      <section className="homeSection" id="what-we-build" aria-labelledby="services-title">
        <div className="sectionIntro"><p className="kicker">What we build</p><h2 id="services-title">Better tools for your everyday work.</h2><p className="lede">From the front desk to your front page, technology should help your team move forward.</p></div>
        <div className="serviceGrid">
          <article className="servicePanel clinicalPanel">
            <p className="kicker">For healthcare teams</p><h3>Ordinis Core Practice</h3>
            <p>Practice management software shaped by hands-on clinic operations. Bring scheduling, patient documentation, and financial tracking into a more connected workflow.</p>
            <ul className="list"><li>Scheduling and patient flow</li><li>Clinical notes and visit tracking</li><li>Charges, payments, and reporting</li></ul>
            <Link className="textLink" href="/core-practice">Explore Core Practice <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="servicePanel">
            <p className="kicker">For businesses</p><h3>Websites &amp; automation</h3>
            <p>A website that explains your business clearly. Hosting that keeps it running. Custom tools that take repetitive tasks off your team&apos;s plate.</p>
            <ul className="list"><li>Custom website design and local search foundations</li><li>Hosting, maintenance, and performance</li><li>Business workflows and custom software</li></ul>
            <Link className="textLink" href="/digital-services">Explore Digital Services <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </section>

      <section className="workSection" aria-labelledby="work-title">
        <div><p className="kicker">A closer look</p><h2 id="work-title">Real work.<br />A practical starting point.</h2><p>Visit the Integrative Health Solutions website to see the service pages, navigation, and patient contact experience in use.</p></div>
        <article className="projectFeature"><p className="projectType">Website development · Healthcare</p><h3>Integrative Health Solutions</h3><p>Explore the live website for Integrative Health Solutions, a Florence clinic.</p><a className="textLink" href="https://www.bestflorencechiropractor.com/" target="_blank" rel="noopener noreferrer" aria-label="View live IHS website (opens in a new tab)">View live website <span aria-hidden="true">↗</span></a></article>
      </section>

      <section className="homeSection" aria-labelledby="approach-title">
        <div className="sectionIntro"><p className="kicker">How we work</p><h2 id="approach-title">Start with the work.<br />Build the right tools around it.</h2></div>
        <ol className="processGrid">
          <li><span className="stepNumber">01 / Understand</span><h3>Find the friction.</h3><p>We look at what your customers and team need, where time is lost, and what a better result would look like.</p></li>
          <li><span className="stepNumber">02 / Build</span><h3>Make it tangible.</h3><p>Review a clear direction and practical examples, with the structure and functionality your project actually needs.</p></li>
          <li><span className="stepNumber">03 / Support</span><h3>Keep it useful.</h3><p>Plan for hosting, maintenance, and the changes that come as your organization grows.</p></li>
        </ol>
      </section>

      <section className="homeContact" aria-labelledby="contact-title"><div><p className="kicker">Your next step</p><h2 id="contact-title">What could work better?</h2><p>Tell us about your website, your clinic, or the task you keep doing by hand. We&apos;ll start there.</p><div className="btnRow"><Link className="btn btnPrimary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link><a className="textLink" href={siteConfig.emailHref}>Email Matt directly</a></div></div><p className="contactNote">Based in Florence, SC.<br />Built around your business.</p></section>
    </div>
  );
}
