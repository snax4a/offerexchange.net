import clsx from 'clsx';
import { useState } from 'react';

import type { Testimonial } from '@/components/cards/TestimonialCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

import avatarImage3 from '~/images/avatars/avatar-3.png';
import avatarImage4 from '~/images/avatars/avatar-4.png';
import avatarImage5 from '~/images/avatars/avatar-5.png';
import avatarImage6 from '~/images/avatars/avatar-6.png';
import avatarImage7 from '~/images/avatars/avatar-7.png';
import avatarImage8 from '~/images/avatars/avatar-8.png';
import avatarImage9 from '~/images/avatars/avatar-9.png';
import avatarImage10 from '~/images/avatars/avatar-10.png';
import avatarImage11 from '~/images/avatars/avatar-11.png';

const testimonials: Testimonial[][] = [
  [
    {
      content:
        'Mira’s teaching style is second to none. Everything was easy to follow every step of the way.',
      author: {
        name: 'Bartłomiej Karaś',
        role: 'Pracownik apteki',
        image: avatarImage3,
      },
    },
    {
      content:
        'Even though I was excited to learn, I was pessimistic that I wouldn’t actually ever get good enough to design my own icons. I was wrong — this book is all I needed.',
      author: {
        name: 'Justyna Wysocka',
        role: 'Menadżer żabki',
        image: avatarImage4,
      },
    },
    {
      content:
        'I’ve been employed as a professional icon designer for years and still learned tons of new tricks that have made my work even better',
      author: {
        name: 'Joanna Dziewulska',
        role: 'Pracownik biurowy',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'I run an ecommerce store selling rare vintage gummy bears and could never find a good gummy bear icon. Now I can design my own in minutes.',
      author: {
        name: 'Dariusz Kowalski',
        role: 'Właściciel restauracji',
        image: avatarImage7,
      },
    },
    {
      content:
        'The complete package is worth it for the weekly teardown videos alone. I’ve learned so much watching Mira take apart other icons and recreate them from scratch.',
      author: {
        name: 'Patrycja Pytlik',
        role: 'Kierownik budowy',
        image: avatarImage11,
      },
    },
    {
      content:
        'I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.',
      author: {
        name: 'Adam Nowak',
        role: 'Inżynier budowlany',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'I couldn’t believe how fast Mira moved in Figma compared to my own workflow. I’m designing icons more accurately in half the time with the shortcuts I learned from her videos.',
      author: {
        name: 'Norbert Daszkiewicz',
        role: 'Mechanik samochodowy',
        image: avatarImage5,
      },
    },
    {
      content:
        'I never thought I would enjoy designing icons but using the ideas in this book, it’s become a great way for me to relax while still being creative.',
      author: {
        name: 'Agnieszka Piotrowska',
        role: 'Założyciel startupu',
        image: avatarImage10,
      },
    },
    {
      content:
        'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
      author: {
        name: 'Konrad Niedziocha',
        role: 'Specjalista IT',
        image: avatarImage6,
      },
    },
  ],
];

export default function Testimonials() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id='testimonials' className='py-8 sm:py-10 lg:py-16'>
      <Container>
        <SectionHeading
          heading='Kilka miłych słów od pierwszych klientów...'
          subheading='Pracowaliśmy z niewielką grupą klientów korzystających z wczesnego dostępu, aby upewnić się że Offer Exchange jest dokładnie tym, czego potrzebują. Oto, co mieli do powiedzenia o gotowym produkcie.'
        />
        <ul className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8'>
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
        {!isExpanded && (
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
        )}
      </Container>
    </section>
  );
}
