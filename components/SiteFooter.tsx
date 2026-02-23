import styles from './siteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          Ordinis Technologies, LLC | Florence, South Carolina | &copy; 2026 Ordinis Technologies
        </p>
      </div>
    </footer>
  );
}
