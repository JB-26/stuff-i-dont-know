import styles from "./listenOn.module.css";
import Link from "next/link";
import ApplePodcasts from "../public/podcast-logos/Apple_Podcasts_Listen_Badge.svg";
import SpotifyBadge from "../public/podcast-logos/spotify-podcast-badge.svg";
import YoutubeBadge from "../public/podcast-logos/Available on YouTube Podcast Badges/Black/SVG/AvailableonYouTube-black-SVG.svg";
import Image from "next/image";

export default function Header() {
  return (
    <section className={styles.listen}>
      <div className={styles.listenItem}>
        <Link
          href={"https://www.apple.com/uk/apple-podcasts/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={ApplePodcasts}
            alt={"Listen on Apple Podcasts"}
            className={styles.badge}
          />
        </Link>
      </div>
      <div className={styles.listenItem}>
        <Link
          href={"https://support.spotify.com/uk/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={SpotifyBadge}
            alt={"Listen on Spotify"}
            className={styles.badge}
          />
        </Link>
      </div>
      <div className={styles.listenItem}>
        <Link
          href={"https://www.youtube.com/podcasts"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            priority
            src={YoutubeBadge}
            alt={"Listen on YouTube"}
            className={styles.badge}
          />
        </Link>
      </div>
    </section>
  );
}
