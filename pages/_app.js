import '../styles/globals.css'
import Layout from "../src/componetns/Layout/Loyout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <Layout>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500&display=swap"
            rel="stylesheet"/>

      </Head>
          <Component {...pageProps} />
        </Layout>
}

export default MyApp
