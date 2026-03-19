import Link from 'next/link';
import { siteConfig } from '@/lib/site';

type ContactCtaProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function ContactCta({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: ContactCtaProps) {
  const renderAction = (href: string, label: string, className: string) =>
    href.startsWith('mailto:') || href.startsWith('tel:') ? (
      <a className={className} href={href}>
        {label}
      </a>
    ) : (
      <Link className={className} href={href}>
        {label}
      </Link>
    );

  return (
    <section className="ctaPanel">
      <div className="kicker">Next Step</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="btnRow">
        {renderAction(primaryHref, primaryLabel, 'btn btnPrimary')}
        {secondaryHref && secondaryLabel ? (
          renderAction(secondaryHref, secondaryLabel, 'btn')
        ) : null}
      </div>
      <p className="small contactDetails">
        <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
        <span>{siteConfig.shortLocation}</span>
        <a href={siteConfig.emailHref}>{siteConfig.email}</a>
      </p>
    </section>
  );
}
