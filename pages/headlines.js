import NewsItem from "../component/NewsItem";
import style from "../styles/Index.module.css"
import Innerheadlines from "../component/Innerheadlines";
const url="https://newsapi.org/v2/top-headlines?country=in&apiKey=1f78ec17a1924ad4aab1aa6e9b978144";


function headlines({news}) {
 
  return (
  <div>
    <Innerheadlines/>
       {news.articles.map((item)=>(
        <NewsItem key={item.id} news={item}/>
      ))}
  </div>
  );
}

export default headlines;

export async function getServerSideProps() {
    let h=new Headers();
    h.append("Accept","application/json")
    let auth="Basic"+"rex:pass123"
    h.append("Authorization", auth)
    console.log(auth);
    let req=new Request(url, {
      method:"GET",
      headers: h,
      credentials: "same-origin"
    });

    const res = await fetch(req);
    const data = await res.json();
    console.log(data);
    return {
     
      props: {news : data}, 
      
    }
  }
   