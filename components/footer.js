import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <ul className={styles.footer}>
        <li className={styles.blog}>
          <a
            href="https://github.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li className={styles.blog}>
          <a
            className={styles.blog}
            href="https://www.linkedin.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.blog}>
          <a
            className={styles.blog}
            href="https://joinmastodon.org/"
            rel="noopener noreferrer me"
            target="_blank"
          >
            Mastodon
          </a>
        </li>
        <li className={styles.blog}>
          <a
            className={styles.blog}
            href="/rss.xml"
            rel="noopener noreferrer"
            target="_blank"
          >
            RSS
          </a>
        </li>
      </ul>
    </footer>
  );
}
