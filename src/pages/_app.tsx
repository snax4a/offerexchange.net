import { AppProps } from 'next/app';
import 'focus-visible';

import 'keen-slider/keen-slider.min.css';
import '@/styles/globals.css';

function OfferExchange({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default OfferExchange;
