import Footer from "../components/footer";
import Script from 'next/script'
import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../components/layout";
import styles from '../styles/error.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {

  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/af67ca5a39.js"
        crossOrigin="anonymous"
        async
        ></Script>
      <Head>
        <title>{siteTitle}</title>
        <meta
          charSet="utf-8"
          name="The personal website of IT Professional, Joshua Blewitt"
        />
      </Head>
      <div className={styles.errorMessage}>
        <h2 className={utilStyles.heading2Xl}>
          {" "}
          <span role="img" aria-label="string">
            ⁉️
          </span>
        </h2>
        <h2 data-testid="error-heading">You&apos;ve found the error page!</h2>
        <h2>Why not press this <Link href="/">link</Link> to return to the home page</h2>
      </div>
      <Footer></Footer>
    </div>
    );
}
