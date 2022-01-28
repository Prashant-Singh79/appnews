import Head from "next/head"
import Header from "./Header";


function Layout({title,children}) {
  return (
  <div>
   
      <Head>
        <title>{title}</title>
      </Head>
      
      <Header/>
    

      {children}
  </div>
  );
}

export default Layout;
