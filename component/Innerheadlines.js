import styles from "../styles/Innerheadlines.module.css"
import Link from "next/link";

function Innerheadlines() {
  return (
    <div className={styles.header}>
    

    <ul className={styles.list}>
    <Link href="">
      <a className={styles.itemList}>India</a>
      </Link>
      <Link href="">
      <a className={styles.itemList}>USA</a>
      </Link>
      <Link href="">
      <a className={styles.itemList}>England</a>
      </Link>
    </ul>
  </div>
  );
}

export default Innerheadlines;
