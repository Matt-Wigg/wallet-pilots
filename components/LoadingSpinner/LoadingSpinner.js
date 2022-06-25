import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div clasName={styles.container}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
