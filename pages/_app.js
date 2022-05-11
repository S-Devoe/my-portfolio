import Footer from '../components/Footer'
import Header from '../components/Header';
import Layout from '../Layout/Layout';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
