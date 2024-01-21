import styles from "./listenOn.module.css";
import Link from "next/link";
import Icon from "../public/icon.webp";
import ApplePodcasts from "../public/podcast-logos/Apple_Podcasts_Listen_Badge.svg"
import SpotifyBadge from "../public/podcast-logos/spotify-podcast-badge.svg"
import YoutubeBadge from "../public/podcast-logos/Available on YouTube Podcast Badges/Black/SVG/AvailableonYouTube-black-SVG.svg"
import Image from "next/image";

export default function Header() {
    return (
        <section className={styles.listen}>
            <div className={styles.listenItem}>
                <Image
                    priority
                    src={ApplePodcasts}
                    alt={"Listen on Apple Podcasts"}
                    />
            </div>
            <div className={styles.listenItem}>
                <Image
                    priority
                    src={SpotifyBadge}
                    alt={"Listen on Spotify"}
                />
            </div>
            <div className={styles.listenItem}>
                <Image
                    priority
                    src={YoutubeBadge}
                    alt={"Listen on YouTube"}
                />
            </div>
        </section>
        );
}
