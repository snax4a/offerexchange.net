import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import 'focus-visible';

import 'keen-slider/keen-slider.min.css';
import '@/styles/globals.css';

import { IS_PROD } from '@/lib/constants';

function OfferExchange({ Component, pageProps }: AppProps) {
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
