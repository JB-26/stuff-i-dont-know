import Layout, { siteTitle } from "../components/layout";
import ListenOn from "../components/listenOn";
import Footer from "../components/footer";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/index.module.css";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import logoImage from "../public/images/podcastLogo.png";
import Date from "../components/date";
import paginationStyle from "../styles/blog.module.css";
import { getSortedPostsData } from "../lib/posts";
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
      <Script
        src="https://kit.fontawesome.com/af67ca5a39.js"
        crossOrigin="anonymous"
        async
      ></Script>
      <Head>
        <title>{siteTitle}</title>
        <meta
          charSet="utf-8"
          name="The official website for the 'Stuff I don't know!' podcast"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 data-testid="main-heading" className={utilStyles.heading2Xl}>
              Stuff I don&apos;t know! {"  "}
              <span role="img" aria-label="string">
                🎙️
              </span>
            </h1>
            <Image
              priority
              className={styles.image}
              src={logoImage}
              data-testid="image"
              alt="Your podcast logo!"
            />
            <p data-testid="subtitle" className={styles.known}>
              Ever wonder about the mysteries that surround us every day? Join
              me, <Link href="https://joshblewitt.dev/">Joshua Blewitt</Link>, on a bi-weekly journey into the unknown with
              my podcast, &ldquo;Stuff I Don&apos;t Know!&ldquo;
            </p>
            <p data-testid="paragraph">
              In this show, we dive headfirst into the vast sea of knowledge,
              exploring everything from the commonplace, like the inner workings
              of TVs and fridges, to the complexities of cutting-edge subjects
              like quantum computing and astrophysics. <br /> <br />
              But here&apos;s the twist – I&apos;m not an expert. I&apos;m just
              a curious mind trying to make sense of the world. Every episode, I
              take on a new challenge, unraveling the intricacies of a topic I
              know nothing about. It&apos;s like learning on the go, and I want
              you to be part of the adventure. <br /> <br />
              So, why embark on this quest for the unknown? Because
              understanding the unfamiliar is a thrilling journey, and the best
              part is, you get to be my co-pilot. Together, we&apos;ll laugh,
              question, and explore the depths of knowledge, making the complex
              seem a little less daunting. <br /> <br />
              Tune in every fortnight as I stumble through uncharted
              territories, armed with curiosity and a microphone. The more we
              learn, the more we realise how much stuff we don&apos;t know.
            </p>
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
