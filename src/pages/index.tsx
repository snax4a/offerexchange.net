import * as React from 'react';

import Page from '@/components/layout/Page';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Page>
      <Seo />

      <section className='container self-center'>
        <div className='flex grow'>Strona główna</div>
      </section>
    </Page>
  );
}
