import Link from 'next/link';
import styles from './siteFooter.module.css';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className={styles.footer}><div className={styles.inner}>
      <div className={styles.grid}>
        <div><p className={styles.brand}>{siteConfig.name}</p><p className={styles.note}>Technology that works in practice.</p><p className={styles.note}>Healthcare software, websites, and automation.<br />Built in Florence, South Carolina.</p></div>
        <nav aria-label="Footer"><p className={styles.label}>Explore</p><Link href="/core-practice">Core Practice</Link><Link href="/digital-services">Digital Services</Link><Link href="/architecture">Architecture</Link><Link href="/security">Security</Link><Link href="/company">Company</Link></nav>
        <div className={styles.contact}><p className={styles.label}>Start a conversation</p><a href={siteConfig.emailHref}>{siteConfig.email}</a><a href={siteConfig.phoneHref}>{siteConfig.phone}</a><div className={styles.social}><a href={siteConfig.facebookUrl}>Facebook</a><a href={siteConfig.linkedinUrl}>LinkedIn</a></div></div>
      </div>
      <p className={styles.legal}>{siteConfig.legalName} · {siteConfig.location}</p>
    </div></footer>
  );
}
