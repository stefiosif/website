import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <div className="flex flex-col gap-6">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  );
};

export default MyApp
