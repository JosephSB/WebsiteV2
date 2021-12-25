import Head from 'next/head';
import AsideRedes from '../Components/Layouts/AsideRedes';
import Footer from '../Components/Layouts/Footer';
import Header from '../Components/Layouts/Header';
import SpanLanguage from '../Components/Layouts/spanLanguage';
import { ThemeProvider } from '../Context/ThemeContext';
import '../Scss/main.scss';

function MyApp({ Component, pageProps }) {
  console.log(language)
  return (
    <ThemeProvider>
      <Head>
        <title>JosephSB</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/23fca06461.js" crossorigin="anonymous"></script>
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
