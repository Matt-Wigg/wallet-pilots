import Head from "next/head";
import GalleryFilter from "../components/galleryfilter";
import styles from "../styles/Home.module.css";

export default function Surrealestates() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Surrealestates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GalleryFilter />
      <main className={styles.main}>Surrealestates</main>
    </div>
  );
}
