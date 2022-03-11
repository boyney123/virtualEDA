import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>VirtualEDA.io | Event Driven Community</title>
        <meta
          name="description"
          content="A community for people who want to share and learn more about Event-Driven Architectures."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VirtualEDA.io" />
        <meta
          property="og:description"
          content="A community for people who want to share and learn more about Event-Driven Architectures."
        />
        <meta property="og:url" content="/social.png" />
        <meta property="og:url" content="https://virtualeda.io" />
        <meta property="og:image" content="https://virtualeda.io/social.png" />
        <meta
          property="og:image:alt"
          content="VirtualEDA.io | A community for people who want to share and learn more about Event-Driven Architectures."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:locale" content="en-GB" />
        <meta name="author" content="VirtualEDA" />
      </Head>
      <div className="bg-gray-800">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
