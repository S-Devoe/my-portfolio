import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Lagbalu Lateef (DeeVoe) portfolio" />
        <meta itemProp="name" content="DeeVoe" />
        <meta itemProp="name" content="Lagbalu lateef" />
        <meta
          itemProp="description"
          content=" Lagbalu Lateef (DeeVoe) portfolio"
        />

        <meta property="og:title" content="Devoe portfolio" />
        <meta property="og:type" content="portfolio" />
        <meta
          property="og:description"
          content="Lagbalu Lateef (DeeVoe) portfolio"
        />
        <meta
          property="og:site_name"
          content="Deevoe, i.e. DeeVoe or Lagbalu portfolio"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
