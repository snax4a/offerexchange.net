import * as React from 'react';

import Page from '@/components/layout/Page';
import Seo from '@/components/Seo';
import FAQ from '@/sections/FAQ';
import Features from '@/sections/Features';
import Pricing from '@/sections/Pricing';

export default function HomePage() {
  return (
    <Page>
      <Seo />
      <Features />
      <Pricing />
      <FAQ />
    </Page>
  );
}
