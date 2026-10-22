import Link from 'next/link';
import styles from './siteHeader.module.css';
import { siteConfig } from '@/lib/site';

const nav = [
  { href: '/core-practice', label: 'Core Practice' },
  { href: '/digital-services', label: 'Websites & Automation' },
  { href: '/company', label: 'Company' },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.topline}><span>{siteConfig.shortLocation}</span><a href={siteConfig.emailHref}>{siteConfig.email}</a><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></div>
      <div className={styles.inner}>
        <Link href="/" className={styles.brandLink} aria-label="Ordinis Technologies home"><img className={styles.mark} src="/brand-mark.png" alt="" width="42" height="42" /><span className={styles.name}>Ordinis<span>TECHNOLOGIES</span></span></Link>
        <nav className={styles.nav} aria-label="Primary">{nav.map(item => <Link key={item.href} href={item.href} className={styles.navLink}>{item.label}</Link>)}</nav>
        <Link className={styles.cta} href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
