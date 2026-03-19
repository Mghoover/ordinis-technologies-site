import styles from './siteFooter.module.css';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <p className={styles.copy}>
            {siteConfig.legalName}
            <br />
            {siteConfig.location}
            <br />
            Phone: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <br />
            Email: <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          </p>
          <p className={styles.note}>
            Custom websites, hosting, automation, and practice management software built for
            businesses and healthcare teams that need dependable systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
