import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { ROUTES } from '@/lib/constants';
import { useIsScrolled } from '@/hooks/useIsScrolled';

import Container from '@/components/Container';
import UnstyledLink from '@/components/links/UnstyledLink';
import DesktopNavigation from '@/components/navigation/DesktopNavigation';
import MobileNavigation from '@/components/navigation/MobileNavigation';

import Logo from '~/svg/logo.svg';
import SmallLogo from '~/svg/logo-small.svg';

export default function Header() {
  const { pathname } = useRouter();
  const isScrolled = useIsScrolled();

  return (
    <header
      className={clsx('sticky top-0 z-50 transition duration-500', {
        'shadow-sm md:shadow-md': isScrolled,
        'bg-gray-50': !isScrolled && pathname === ROUTES.HOME,
        'bg-white': isScrolled || pathname !== ROUTES.HOME,
      })}
    >
      <Container>
        <Popover className='relative'>
          <div className='flex items-center justify-between py-6'>
            <div className='flex lg:flex-1'>
              <UnstyledLink
                href={ROUTES.HOME}
                className='rounded-md pr-2 focus-visible:ring-offset-8'
              >
                <span className='sr-only'>Strona główna</span>
                <Logo
                  className='w-44 text-9xl md:hidden lg:block xl:w-48'
                  height='auto'
                  width='auto'
                />
                <SmallLogo
                  className='hidden w-10 md:block lg:hidden'
                  height='auto'
                  width='auto'
                />
              </UnstyledLink>
            </div>

            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <span className='sr-only'>Otwórz menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>

            <DesktopNavigation />
          </div>

          <MobileNavigation />
        </Popover>
      </Container>
    </header>
  );
}
