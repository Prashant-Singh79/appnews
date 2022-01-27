import NewsItem from "../component/NewsItem";
import style from "../styles/Index.module.css"
import Innerheadlines from "../component/Innerheadlines";



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
    
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=1f78ec17a1924ad4aab1aa6e9b978144");
    const data = await res.json();
    console.log(data);
    return {
     
      props: {news : data}, 
      
    }
  }
   