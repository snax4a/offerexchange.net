import React from 'react';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

export default function Stats() {
  return (
    <section id='stats' className='bg-gray-50 pt-12 sm:pt-16'>
      <Container>
        <SectionHeading
          heading='Zaufało nam już ponad 40 firm'
          subheading='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.'
        />
        <div className='mt-10 bg-white pb-12 sm:pb-16'>
          <div className='relative'>
            <div className='absolute inset-0 h-1/2 bg-gray-50' />
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-4xl'>
                <dl className='rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3'>
                  <div className='flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                      Wysłanych zapytań
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-secondary'>
                      ~200
                    </dd>
                  </div>
                  <div className='flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                      Zebranych ofert
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-secondary'>
                      ~800
                    </dd>
                  </div>
                  <div className='flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l'>
                    <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                      Zaoszczędzonego czasu
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-secondary'>
                      ~23h
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
