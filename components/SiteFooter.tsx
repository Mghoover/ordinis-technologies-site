import Link from 'next/link';
import styles from './siteFooter.module.css';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div>
            <div className={styles.title}>Ordinis Technologies</div>
            <div className={styles.small}>
              Clinical infrastructure engineered for control, clarity, and longevity.
            </div>
          </div>

          <div className={styles.links}>
            <Link href="/core-practice">Core Practice</Link>
            <Link href="/architecture">Architecture</Link>
            <Link href="/security">Security</Link>
            <Link href="/company">Company</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className={styles.rule} />
        <div className={styles.small}>© {year} Ordinis Technologies, LLC</div>
      </div>
    </footer>
  );
}
