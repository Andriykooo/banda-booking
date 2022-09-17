import '../styles/globals.css'
import Layout from "../src/componetns/Loyout/Loyout";

function MyApp({ Component, pageProps }) {
  return <Layout>
          <Component {...pageProps} />
        </Layout>
}

export default MyApp
