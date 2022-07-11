import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import 'focus-visible';

import 'keen-slider/keen-slider.min.css';
import '@/styles/globals.css';

function OfferExchange({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      selfHosted
      trackOutboundLinks
      domain='offerexchange.net'
      customDomain='analytics.offerexchange.net'
      enabled={process.env.NODE_ENV === 'production'}
    >
      <Component {...pageProps} />;
    </PlausibleProvider>
  );
}

export default OfferExchange;
