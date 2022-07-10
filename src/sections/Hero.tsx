import Image from 'next/future/image';
import { StaticImageData } from 'next/image';

import Container from '@/components/Container';
import ImageSlider from '@/components/ImageSlider';

import offerListScreen from '~/images/app-previews/webp/lista-ofert.webp';
import ordersListScreen from '~/images/app-previews/webp/lista-zamowien.webp';
import inquiryListScreen from '~/images/app-previews/webp/lista-zapytan-ofertowych.webp';
import comparisonScreen from '~/images/app-previews/webp/porownywarka-ofert-handlowych.webp';
import addressesScreen from '~/images/app-previews/webp/zarzadzanie-adresami.webp';
import tradersScreen from '~/images/app-previews/webp/zarzadzanie-handlowcami.webp';
import SquaresPattern from '~/svg/squares-pattern.svg';

const sliderItems: Array<{ name: string; image: StaticImageData }> = [
  {
    name: 'Lista zapytań handlowych',
    image: inquiryListScreen,
  },
  {
    name: 'Lista ofert',
    image: offerListScreen,
  },
  {
    name: 'Porównywarka ofert handlowych',
    image: comparisonScreen,
  },
  {
    name: 'Lista zamówień',
    image: ordersListScreen,
  },
  {
    name: 'Zarządzanie handlowcami',
    image: tradersScreen,
  },
  {
    name: 'Zarządzanie adresami',
    image: addressesScreen,
  },
];

export default function Hero() {
  return (
    <section className='bg-gray-50'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-y-0 h-full w-full' aria-hidden='true'>
          <div className='relative h-full'>
            <SquaresPattern
              width={404}
              height={774}
              className='absolute right-full translate-y-1/3 translate-x-1/4 transform text-gray-200 sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full'
            />
            <SquaresPattern
              width={404}
              height={784}
              className='absolute left-full -translate-y-3/4 -translate-x-1/4 transform text-gray-200 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4'
            />
          </div>
        </div>

        <div className='relative pt-6 pb-16 sm:pb-24'>
          <Container className='mt-16 sm:mt-24'>
            <div className='mx-auto max-w-xl text-center md:max-w-3xl'>
              <h1 className='text-3xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='mb-1 block'>Platforma wymiany</span>
                <span className='block text-secondary'>informacji handlowych</span>
              </h1>
              <p className='mt-5 text-base text-gray-500 sm:text-lg  md:text-xl'>
                Offer Exchange to rozwiązanie optymalizujące proces zakupów w Twojej
                firmie. Z jego pomocą wyślesz zapytania ofertowe, zbierzesz i porównasz
                oferty od handlowców oraz złożysz u nich zamówienia.
              </p>
            </div>
          </Container>
        </div>

        <div className='relative'>
          <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
            <div className='flex-1' />
            <div className='w-full flex-1 bg-gray-800' />
          </div>
          <div className='mx-auto max-w-7xl px-4 sm:px-6'>
            <div className='flex items-center justify-center overflow-x-hidden rounded-lg lg:rounded-3xl'>
              <ImageSlider showThumbnails={false}>
                {sliderItems.map((slide, index) => (
                  <Image
                    key={`slide-${index}`}
                    className='relative rounded-lg shadow-lg lg:rounded-3xl'
                    placeholder='blur'
                    src={slide.image}
                    alt={slide.name}
                  />
                ))}
              </ImageSlider>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-800'>
        <div className='py-8 lg:py-14' />
        {/* <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <h2 className='text-center text-sm font-semibold uppercase tracking-wide text-gray-400'>
            Wykorzystywana przez ponad 40 przyszłościowo myślących firm
          </h2>
          <div className='mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <Image
                height={48}
                width={105}
                src='/images/customers/tuple-logo-gray-400.svg'
                alt='Tuple'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <Image
                height={48}
                width={138}
                src='/images/customers/mirage-logo-gray-400.svg'
                alt='Mirage'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <Image
                height={48}
                width={127}
                src='/images/customers/statickit-logo-gray-400.svg'
                alt='StaticKit'
              />
            </div>
            <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <Image
                height={48}
                width={158}
                src='/images/customers/transistor-logo-gray-400.svg'
                alt='Transistor'
              />
            </div>
            <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <Image
                height={48}
                width={180}
                src='/images/customers/workcation-logo-gray-400.svg'
                alt='Workcation'
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
