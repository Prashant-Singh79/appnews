import style from "../styles/NewsItem.module.css";
import Image from "next/image"

function NewsItem({ news }) {
  return (
    <div className={style.news}>
      <a  href={news.url} className={style.newsinner}>
        <div className={style.img}>
          <img src={news.urlToImage} height={250} width={300} ></img>
        </div>
        <div className={style.content}>
          <div className={style.source}><h1>{news.source.name}</h1></div>
          <div className={style.title}><h3>{news.title}</h3></div>
          <div className={style.desc}><h4>{news.description}</h4></div>
          <div className={style.author}><h4>{news.author} </h4></div>
          <div className={style.author}><h4>Time : {news.publishedAt} </h4></div>
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
