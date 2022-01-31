import {useState } from "react";
import style from "../styles/Sources.module.css"

function sources() {
  

  const [data, updateData] = useState([]);
  const [query, updateQuery] = useState("");
  const [to, toUpdate] = useState();

 
  async function callMe(search) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1f78ec17a1924ad4aab1aa6e9b978144`);
    const ans = await response.json();

  
    updateData(ans.articles);
  }


  
  function show(event) {
    clearTimeout(to);
    updateQuery(event.target.value);
    const toid = setTimeout(() => callMe(event.target.value), 100);
    toUpdate(toid);
  }
  

  return (
  <div>
    <div className={style.head}> 
     
   
      <div className={style.inner}>
        <input className={style.inp} type="text" onChange={show} placeholder="Enter the channel" />
      
      </div>
      </div>
      <div className={style.outer}>
        <div>
          {data.filter((item) => {
              if (query === "") {
                return item;
              } else {
                if (item.title.toLowerCase().includes(query.toLowerCase())) {
                  return item;
                }
              }
            })
            .map((news) => (
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
            ))}
        </div>
        </div>
      </div>

 
  );
}

export default sources;
