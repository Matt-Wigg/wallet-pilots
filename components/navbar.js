import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <span className={styles.link}>Opensea</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>Twitter</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>Instagram</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.link}>Discord</span>
      </Link>
      <Link href="/" passHref>
        <span className={styles.linkConnect}>CONNECT</span>
      </Link>
    </nav>
  );
}
