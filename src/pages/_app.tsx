import { AppProps } from 'next/app';
import 'focus-visible';

import '@/styles/globals.css';

function OfferExchange({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default OfferExchange;
