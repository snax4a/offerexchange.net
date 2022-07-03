import * as React from 'react';

import Page from '@/components/layout/Page';
import Seo from '@/components/Seo';
import FAQ from '@/sections/FAQ';
import Features from '@/sections/Features';
import Pricing from '@/sections/Pricing';
import Stats from '@/sections/Stats';
import Testimonials from '@/sections/Testimonials';

export default function HomePage() {
  return (
    <Page>
      <Seo />
      <Features />
      <Pricing />
      <Stats />
      <Testimonials />
      <FAQ />
    </Page>
  );
}
