import Link from 'next/link';
import styles from './siteHeader.module.css';
import { siteConfig } from '@/lib/site';

const nav = [
  { href: '/core-practice', label: 'Core Practice' },
  { href: '/digital-services', label: 'Digital Services' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/security', label: 'Security' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink}>
            <span className={styles.mark} aria-hidden>
              <img src="/brand-mark.png" alt="" />
            </span>
            <span className={styles.name}>Ordinis Technologies</span>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.contactLine}>
            <span>{siteConfig.shortLocation}</span>
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          </div>
          <nav className={styles.nav} aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link className={styles.cta} href="/contact">
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
