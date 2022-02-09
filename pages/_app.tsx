import '../styles/globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-800">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
