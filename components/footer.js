import styles from '../styles/Footer.module.css';

export default function Footer({ props }) {
  return (
    <>
      <footer className={styles.footer}>
          <span className={styles.logo}>
            Footer
          </span>
      </footer>
      {props}
    </>
  );
}
