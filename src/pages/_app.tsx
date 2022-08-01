import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { useEffect } from 'react';
import 'focus-visible';

import 'keen-slider/keen-slider.min.css';
import '@/styles/globals.css';

import { IS_PROD, sayHelloFlag } from '@/lib/constants';
import sayHello from '@/lib/sayHello';

let saidHello = !sayHelloFlag;

function OfferExchange({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!saidHello) {
      sayHello();
      saidHello = true;
    }
  }, []);

  return (
    <PlausibleProvider
      selfHosted
      trackOutboundLinks
      domain='offerexchange.net'
      customDomain='https://analytics.offerexchange.net'
      enabled={IS_PROD}
    >
      <Component {...pageProps} />;
    </PlausibleProvider>
  );
}

export default OfferExchange;
