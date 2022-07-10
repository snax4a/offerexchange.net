import clsx from 'clsx';
import { useState } from 'react';

import { ROUTES } from '@/lib/constants';

import type { Testimonial } from '@/components/cards/TestimonialCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import Container from '@/components/Container';
import ButtonLink from '@/components/links/ButtonLink';
import SectionHeading from '@/components/SectionHeading';

import avatarImage3 from '~/images/avatars/avatar-3.png';
import avatarImage5 from '~/images/avatars/avatar-5.png';
import avatarImage7 from '~/images/avatars/avatar-7.png';

const testimonials: Testimonial[][] = [
  [
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure temporibus tenetur necessitatibus.',
      author: {
        name: 'Bartłomiej Karaś',
        role: 'Pracownik apteki',
        image: avatarImage3,
      },
    },
  ],
  [
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi doloribus a sunt repellat, animi non maxime eaque placeat soluta.',
      author: {
        name: 'Dariusz Kowalski',
        role: 'Właściciel restauracji',
        image: avatarImage7,
      },
    },
  ],
  [
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas nesciunt atque tenetur reprehenderit facilis aspernatur voluptate.',
      author: {
        name: 'Norbert Daszkiewicz',
        role: 'Mechanik samochodowy',
        image: avatarImage5,
      },
    },
  ],
];

export default function Testimonials() {
  const [isExpanded] = useState(false);
  // const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id='testimonials' className='pt-1 pb-8 sm:py-10 lg:py-10'>
      {/* <section id='testimonials' className='pt-1 pb-8 sm:py-10 lg:py-16'> */}
      <Container>
        {/* <SectionHeading
          heading='Kilka słów od pierwszych klientów...'
          subheading='Pracowaliśmy z niewielką grupą klientów korzystających z wczesnego dostępu, aby upewnić się że Offer Exchange jest dokładnie tym, czego potrzebują. Oto, co mieli do powiedzenia o gotowym produkcie.'
        /> */}
        <SectionHeading
          heading='Kilka słów od pierwszych klientów...'
          subheading='Dopiero wystartowaliśmy i jeszcze tu nic nie ma... Gorąco zachęcamy do przesyłania waszych opinii za pomocą formularza kontaktowego.'
        />

        <div className='-mt-12 flex justify-center'>
          <ButtonLink href={ROUTES.SUPPORT}>Prześlij nam swoją opinię</ButtonLink>
        </div>

        <ul
          aria-hidden='true'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 blur lg:max-w-7xl lg:grid-cols-3'
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className='lg:hidden'>
                <TestimonialCard author={testimonial.author}>
                  {testimonial.content}
                </TestimonialCard>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className={clsx({ 'hidden lg:list-item': !isExpanded })}
            >
              <ul>
                {column
                  .slice(0, isExpanded ? undefined : 2)
                  .map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx({
                        'hidden lg:list-item': testimonialIndex === 0,
                        'lg:mt-8': testimonialIndex === 1,
                        'mt-8': testimonialIndex > 1,
                      })}
                    >
                      <TestimonialCard author={testimonial.author}>
                        {testimonial.content}
                      </TestimonialCard>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
        {/* {!isExpanded && (
          <div className='mt-10 flex justify-center'>
            <button
              type='button'
              className='flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700'
              onClick={() => setIsExpanded(true)}
            >
              Czytaj więcej referencji
              <svg aria-hidden='true' className='ml-2 h-6 w-6'>
                <path
                  d='m17 14-5 5-5-5M12 18.5V5'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        )} */}
      </Container>
    </section>
  );
}
