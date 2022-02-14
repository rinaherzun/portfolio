import { AppProps } from "next/app";
import { useRouter } from "next/router";

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
