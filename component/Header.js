import style from "../styles/Header.module.css";
import Link from "next/link"

function Header() {
  return (
    <div className={style.header}>
      <div className={style.left}>News App</div>

      <ul className={style.list}>
      <Link href="/">
        <a className={style.itemList}>Home</a>
        </Link>
        <Link href="/headlines">
        <a className={style.itemList}>Headlines</a>
        </Link>
        <Link href="/about">
        <a className={style.itemList}>Sources</a>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
