
import Layout from "../component/Layout";
import "../styles/globals.css";
import {SessionProvider} from "next-auth/react"




function MyApp({ Component, pageProps }) {
  return (
    
  <SessionProvider>
    <Layout title={"News App"}>
  <Component {...pageProps} />
  </Layout>
  </SessionProvider>
 

  );
}

export default MyApp;