import FeatureCard from '@/components/cards/FeatureCard';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

import { Feature } from '@/types';

import featureIcon1 from '~/images/features/feature-icon-1.png';
import featureIcon2 from '~/images/features/feature-icon-2.png';
import featureIcon3 from '~/images/features/feature-icon-3.png';
import featureIcon4 from '~/images/features/feature-icon-4.png';
import featureIcon5 from '~/images/features/feature-icon-5.png';
import featureIcon6 from '~/images/features/feature-icon-6.png';

const FEATURES_DATA: Feature[] = [
  {
    image: featureIcon1,
    heading: 'Wysyłanine zapytań',
    text: 'W łatwy sposób wyślesz zapytania ofertowe na poszczególne produkty do zdefiniowanych wcześniej grup handlowców.',
    href: '#',
  },
  {
    image: featureIcon2,
    heading: 'Zbieranie ofert',
    text: 'Odbiorcy zapytania otrzymają mailowo unikalny link do formularza ofertowego, który zbierze dla Ciebie wszystkie potrzebne informacje.',
    href: '#',
  },
  {
    image: featureIcon3,
    heading: 'Porównywanie ofert',
    text: 'Nasza porównywarka pozwoli Ci w kilku kliknięciach wybrać najbardziej atrakcyjne oferty.',
    href: '#',
  },
  {
    image: featureIcon4,
    heading: 'Składanie zamówień',
    text: 'Równie szybko powiadomisz handlowców o chęci zakupu produktów z ich ofert.',
    href: '#',
  },
  {
    image: featureIcon5,
    heading: 'Zarządzanie handlowcami',
    text: 'Zdefiniuj handlowców, z którymi współpracujesz i przypisz ich grup aby móc w łatwy sposób wybrać odbiorców zapytania.',
    href: '#',
  },
  {
    image: featureIcon6,
    heading: 'Zarządzanie adresami',
    text: 'Definiując listę swoich adresów dostaw ułatwisz sobie składanie kolejnych zamówień i unikniesz potencjalnych pomyłek.',
    href: '#',
  },
];

export default function Features() {
  return (
    <section
      id='features'
      className='relative scroll-mt-6 bg-gray-50 pt-1 pb-8 sm:scroll-mt-16 lg:pb-20'
    >
      <Container>
        <SectionHeading
          heading='Jakie funkcje oferuje nasz produkt?'
          subheading='Główne funkcje są wyróżnione poniżej'
        />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2'>
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard feature={feature} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
