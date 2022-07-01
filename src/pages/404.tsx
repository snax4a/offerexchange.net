import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Page from '@/components/layout/Page';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Page>
      <Seo templateTitle='Not Found' />

      <section className='layout flex h-full flex-col items-center justify-center self-stretch text-center text-black'>
        <RiAlarmWarningFill
          size={60}
          className='drop-shadow-glow animate-flicker text-red-500'
        />
        <h1 className='mt-8 text-4xl md:text-6xl md:leading-tight'>
          Ups! Wygląda na to,
          <br />
          że ta strona nie istnieje
        </h1>
        <ArrowLink className='mt-6 md:text-lg' href='/'>
          Wróć na stronę główną
        </ArrowLink>
      </section>
    </Page>
  );
}
