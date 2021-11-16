import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Pokedex - API</title>
        <meta name="description" content="By: Daniel Jacon" />
        <link rel="icon" href="/poke_logo.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
