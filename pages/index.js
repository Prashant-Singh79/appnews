import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link  from "next/link";
import style from "../styles/Index.module.css"


export default function Home({news}) {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="description" content="News App" />
      </Head>
    
     <h1>Welcomes to the news App</h1>
     <div className={style.container}></div>
    
    </div>
  );
}




