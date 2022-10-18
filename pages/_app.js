import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Naviguation from './components/Naviguation'

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Naviguation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp