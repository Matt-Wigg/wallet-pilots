import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.wrapper}>
      <Link href="/" passHref>
        <span className={styles.logo}>Wallet Pilot</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>Assets</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>NFTs</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>Trade</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>More</span>
      </Link>
      </div>
    </nav>
  );
}
