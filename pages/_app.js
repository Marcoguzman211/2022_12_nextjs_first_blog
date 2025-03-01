import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>My first blog</title>
        <meta name="My first blog" content="My first blog with Next.js" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
