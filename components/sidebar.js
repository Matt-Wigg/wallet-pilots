import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Link href="/" passHref>
        <span className={styles.logo}>LOGO</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>Home Base</span>
      </Link>
      <Link href="/surrealestates" passHref>
        <span className={styles.link}>Dealers</span>
      </Link>
      <Link href="/surrealestates" passHref>
        <span className={styles.link}>Estates</span>
      </Link>
      <span className={styles.link}>👀 Soon</span>
      <Link href="/surrealestates" passHref>
        <span className={styles.linkAbout}>Shuttle Passes</span>
      </Link>
      <Link href="/surrealestates" passHref>
        <span className={styles.linkAbout}>Starchart</span>
      </Link>
      <Link href="/surrealestates" passHref>
        <span className={styles.linkAbout}>Crew</span>
      </Link>
    </nav>
  );
}
