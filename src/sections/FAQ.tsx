import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';

import { ROUTES } from '@/lib/constants';

import Container from '@/components/Container';
import ButtonLink from '@/components/links/ButtonLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import SectionHeading from '@/components/SectionHeading';

interface AccordionItem {
  isExpanded: boolean;
  title: string;
  contents: string | React.ReactNode;
}

const accordionData: AccordionItem[] = [
  {
    isExpanded: false,
    title: 'Jak długo mogę używać wersji darmowej?',
    contents: (
      <div>
        Jak długo chcesz, nie ograniczamy czasowo wersji darmowej. Wersja darmowa posiada
        inne limity, które możesz sprawdzić w sekcji{' '}
        <PrimaryLink href={ROUTES.PRICING}>Plany cenowe Offer Exchange</PrimaryLink>.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Czy handlowiec, któremu wysyłam zapytanie potrzebuje konta w aplikacji?',
    contents: (
      <div>
        Nie, handlowiec otrzymuje na podany przez Ciebie adres mailowy specjalny link do
        naszej aplikacji. Pod tym linkiem, przy pomocy interaktywnego formularza będzie
        mógł złożyć dla Ciebie ofertę.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Czy handlowiec, będzie mógł się ze mną jakoś skontaktować?',
    contents: (
      <div>
        Wraz z zapytaniem handlowiec otrzyma też Twoje dane kontaktowe takie jak: imię,
        nazwisko, nazwa firmy, adres e-mail oraz numer telefonu. W razie potrzeby te dane
        pozwolą mu się z Tobą skontaktować.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Czy mogę się zarejestrować bez podawania danych karty kredytowej?',
    contents: (
      <div>
        Oczywiście, nie wymagamy podawania danych twojej karty kredytowej przy
        rejestracji. Karta kredytowa będzie wymagana dopiero w przypadku zakupu licencji
        cyklicznej.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Jak aktualnie wygląda proces zakupu planów płatnych?',
    contents: (
      <div>
        Pracujemy nad automatyzacją tego procesu, plany płatne sprzedawane są na podstawie
        zamówienia złożonego przez formularz kontaktowy. Wystarczy, że w wiadomości podasz
        nam nazwę planu, który wybrałeś oraz dane do faktury, a my zajmiemy się resztą
        najszybciej, jak to możliwe.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I get the payment complete?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA Places. I just
        wanted to tell you that everything worked out perfectly with all the bookings and
        also your booking was very quick and professional. I hope I have the opportunity
        to re-visit South Africa soon, I will then make my bookings with your company
        again. I will also recommend
      </div>
    ),
  },
];

export default function FAQ() {
  return (
    <section id='faq' className='scroll-mt-10 pb-16 sm:scroll-mt-20'>
      <Container>
        <SectionHeading
          heading='Często zadawane pytania'
          subheading='Nasz zespół wsparcia jest zawsze gotowy do pomocy'
        />

        <div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-[400px_1fr]'>
          <div className='grow space-y-3'>
            {accordionData.map((item: AccordionItem) => (
              <Disclosure key={item.title}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='focus-visible:ring-seconrady flex w-full justify-between rounded-xl border border-secondary/20 bg-secondary/10 p-4 text-left text-sm font-medium text-secondary hover:bg-secondary/20 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                      <span>{item.title}</span>
                      <ChevronUpIcon
                        className={clsx(
                          'h-5 w-5 transform text-secondary duration-150 ',
                          {
                            'rotate-180': open,
                            'rotate-90': !open,
                          }
                        )}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter='transition duration-200 ease-out'
                      enterFrom='transform scale-95 opacity-0'
                      enterTo='transform scale-100 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform scale-100 opacity-100'
                      leaveTo='transform scale-95 opacity-0'
                    >
                      <Disclosure.Panel className='px-4 py-2 text-sm text-slate-700'>
                        {item.contents}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          <div className='space-y-3 text-center lg:order-first lg:space-y-5 lg:text-left'>
            <h3>Nie ma Twojego pytania na liście?</h3>
            <p className='text-slate-700'>
              W każdej chwili możesz się z nami skontaktować
            </p>
            <ButtonLink href={ROUTES.SUPPORT}>Zadaj nam pytanie</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
