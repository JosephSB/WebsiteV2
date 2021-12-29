import Head from 'next/head';
import AsideRedes from '../Components/Layouts/AsideRedes';
import Footer from '../Components/Layouts/Footer';
import Header from '../Components/Layouts/Header';
import SpanLanguage from '../Components/Layouts/SpanLanguage';
import { ThemeProvider } from '../Context/ThemeContext';
import '../Scss/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header/>
      <AsideRedes/>
      <Component {...pageProps} />
      <SpanLanguage/>
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
