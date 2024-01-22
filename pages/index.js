import Layout, { siteTitle } from "../components/layout";
import ListenOn from "../components/listenOn";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/index.module.css";
import Head from "next/head";
import Image from "next/image";
import logoImage from "../public/images/podcastLogo.png";
import Date from "../components/date";
import paginationStyle from "../styles/blog.module.css";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";

const postsPerPage = 3;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allPostsNum = allPostsData.length;
  const numPages = Math.ceil(allPostsData.length / postsPerPage);
  const specificPostName = "new-post"; // Replace with the desired post name, without the .md file extension

  return {
    props: {
      allPostsData: allPostsData.slice(0, postsPerPage),
      numPages,
      allPostsNum,
    },
  };
}

export default function Home({
  allPostsData,
  numPages,
  allPostsNum,
  specificPostData,
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          charSet="utf-8"
          name="The personal website of IT Professional, Joshua Blewitt"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 data-testid="main-heading" className={utilStyles.heading2Xl}>
              YOUR SHOW NAME {"  "}
              <span role="img" aria-label="string">
                🎙️
              </span>
            </h1>
            <p data-testid="subtitle" className={styles.known}>
              Your subtitle here. Open the Index.js page to edit this! Make sure you view the README to know how to customise this starter.
            </p>
            <p data-testid="paragraph">Your introduction to your amazing podcast!</p>
          </div>
          <div data-testid="image" className={styles.right}>
            <Image
              priority
              className={styles.image}
              src={logoImage}
              alt="Your podcast logo!"
            />
          </div>
        </div>
      </section>
      <ListenOn></ListenOn>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 data-testid="blog-posts" className={utilStyles.headingXl}>
          {allPostsNum} episodes
        </h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, episode }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {/* Render the episode iframe using dangerouslySetInnerHTML */}
              <div dangerouslySetInnerHTML={{ __html: episode }} />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {/* Pagination links */}
        <div className={paginationStyle.pagination}>
          {Array.from({ length: numPages }, (_, i) => (
            <Link
              style={{ margin: "0.5rem" }}
              href={`/page/${i + 1}`}
              key={i + 1}
            >
              {i + 1}
            </Link>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </Layout>
  );
}
