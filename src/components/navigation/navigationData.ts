import {
  BsBarChartFill,
  BsCartCheckFill,
  BsChatTextFill,
  BsFileTextFill,
  BsPeopleFill,
} from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';

import { ROUTES } from '@/lib/constants';

export interface FeatureItem {
  name: string;
  description: string;
  href: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export interface NavigationItem {
  name: string;
  description: string;
  href: string;
}

export const featureItems: FeatureItem[] = [
  {
    name: 'Wysyłanie zapytań',
    description: 'Wysyłaj zapytania ofertowe do swoich handlowców.',
    href: '#',
    icon: BsChatTextFill,
  },
  {
    name: 'Zbieranie ofert',
    description: 'System zbierze dla Ciebie oferty handlowców w jednym miejscu.',
    href: '#',
    icon: BsFileTextFill,
  },
  {
    name: 'Porównywanie ofert',
    description: 'Porównuj otrzymane oferty za pomocą porównywarki.',
    href: '#',
    icon: BsBarChartFill,
  },
  {
    name: 'Składanie zamówień',
    description: 'Powiadom handlowców o chęci zakupu produktów z ich ofert.',
    href: '#',
    icon: BsCartCheckFill,
  },
  {
    name: 'Zarządzanie handlowcami',
    description: 'Utwórz listę swoich handlowców i organizuj ich w grupach.',
    href: '#',
    icon: BsPeopleFill,
  },
  {
    name: 'Zarządzanie adresami',
    description: 'Utwórz listę swoich adresów dostaw aby przyspieszyć składanie zapytań.',
    href: '#',
    icon: IoLocationSharp,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    name: 'Cennik',
    description: 'Zapoznaj się z uczciwym cennikiem naszej aplikacji.',
    href: ROUTES.PRICING,
  },
  {
    name: 'FAQ',
    description: 'Poznaj odpowiedzi na często zadawane pytania.',
    href: ROUTES.FAQ,
  },
  {
    name: 'O nas',
    description: 'Dowiedz się więcej o naszej firmie.',
    href: ROUTES.ABOUT,
  },
  {
    name: 'Centrum pomocy',
    description:
      'Jeśli masz jakieś pytania lub problem z aplikacją, skontaktuj się z nami.',
    href: ROUTES.SUPPORT,
  },
  {
    name: 'Regulamin',
    description: 'Zapoznaj się z zasadami działania naszego serwisu.',
    href: ROUTES.RULES,
  },
  {
    name: 'Polityka Prywatności',
    description: 'Zapoznaj się z tym jakie dane osobowe są przez nas przetwarzane.',
    href: ROUTES.PRIVACY_POLICY,
  },
];
