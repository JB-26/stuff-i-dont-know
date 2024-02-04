import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.followContainer}>
        <h1 data-testid="main-heading" className={styles.follow}>
          Follow the show! <i className="fa-solid fa-hashtag"></i>
        </h1>
      </div>
      <ul className={styles.footer}>
        <li className={styles.blog}>
          <a
            href="https://www.threads.net/@stuffidontknowpodcast"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-threads"></i>
          </a>
        </li>
        <li className={styles.blog}>
          <a
            className={styles.blog}
            href="https://www.instagram.com/stuffidontknowpodcast?igsh=MXhueG5hNTA3c3QwaQ%3D%3D&utm_source=qr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
