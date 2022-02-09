import '../styles/globals.css';
import { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-800">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
