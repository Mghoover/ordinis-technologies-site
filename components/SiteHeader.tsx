import Link from 'next/link';
import styles from './siteHeader.module.css';

const nav = [
  { href: '/core-practice', label: 'Core Practice' },
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
              ◼
            </span>
            <span className={styles.name}>Ordinis Technologies</span>
          </Link>
        </div>
        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
