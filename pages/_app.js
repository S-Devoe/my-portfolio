
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../Layout/Layout";
import "../styles/globals.scss";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
       
        <Component {...pageProps} />
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{
            duration: 5000,
            style: {
              fontFamily: "Public Sans",
              backgroundColor: "#fafafa",
              fontSize: "0.8125rem",
              lineHeight: "1rem",
            },
          }}
        />
      </Layout>
    </>
  );
}

export default MyApp;
