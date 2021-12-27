import Head from 'next/head';
import AsideRedes from '../Components/layouts/AsideRedes';
import Footer from '../Components/layouts/Footer';
import Header from '../Components/layouts/Header';
import SpanLanguage from '../Components/layouts/spanLanguage';
import { ThemeProvider } from '../Context/ThemeContext';
import '../Scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>JosephSB</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/23fca06461.js" crossOrigin="anonymous"></script>
      </Head>
      <Header/>
      <AsideRedes/>
      <Component {...pageProps} />
      <SpanLanguage/>
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
