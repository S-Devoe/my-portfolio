import Document, {Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    return ( 
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Public+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}
 
export default MyDocument;