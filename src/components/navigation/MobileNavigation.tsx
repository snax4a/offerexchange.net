import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment, MutableRefObject, useRef } from 'react';

import { ROUTES } from '@/lib/constants';

import UnstyledLink from '@/components/links/UnstyledLink';
import { featureItems, navigationItems } from '@/components/navigation/navigationData';

import Logo from '~/svg/logo.svg';

export default function MobileNavigation() {
  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel
        focus
        className='absolute inset-x-0 top-0 z-50 origin-top-right transform transition md:hidden tall:p-4'
      >
        {({ close }) => <MobileNavigationContent close={close} />}
      </Popover.Panel>
    </Transition>
  );
}

interface MobileNavigationContentProps {
  close: (
    focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null> | undefined
  ) => void;
}

function MobileNavigationContent({ close }: MobileNavigationContentProps) {
  const targetRef = useRef(null);
  // const targetElement = targetRef.current;

  // Disable body scroll when the popover is open
  // useEffect(() => {
  //   if (targetElement != null) {
  //     disableBodyScroll(targetElement, { reserveScrollBarGap: true });
  //   }

  //   return () => {
  //     if (targetElement) enableBodyScroll(targetElement);
  //     clearAllBodyScrollLocks();
  //   };
  // }, [targetElement]);

  return (
    <div
      ref={targetRef}
      className='h-screen divide-y-2 divide-gray-100 overflow-y-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 tall:h-auto tall:rounded-2xl'
    >
      <div className='p-8 pt-7 tall:p-6 tall:pt-5'>
        <div className='flex items-center justify-between'>
          <UnstyledLink
            href={ROUTES.HOME}
            onClick={() => close()}
            className='focus-visible:ring-0'
          >
            <Logo className='h-7 w-44 text-9xl' />
          </UnstyledLink>
          <div className='-mr-2'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:!outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span className='sr-only'>Zamknij menu</span>
              <XIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
        </div>

        <div className='mt-6'>
          <nav className='grid gap-6'>
            {featureItems.map((item) => (
              <UnstyledLink
                key={item.name}
                href={item.href}
                onClick={() => close()}
                className='-m-3 flex items-center rounded-lg p-2 hover:bg-gray-50 focus-visible:ring-inset sm:p-3'
              >
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/90 text-white'>
                  <item.icon className='h-5 w-5' aria-hidden='true' />
                </div>
                <div className='ml-4 text-sm font-medium text-gray-900 sm:text-base'>
                  {item.name}
                </div>
              </UnstyledLink>
            ))}
          </nav>
        </div>
      </div>

      <div className='px-8 py-6 tall:px-5'>
        <div className='grid grid-cols-2 gap-y-3 sm:gap-4'>
          {navigationItems.map((item) => (
            <UnstyledLink
              key={item.name}
              href={item.href}
              onClick={() => close()}
              className='whitespace-nowrap rounded-sm text-sm font-medium text-gray-900 hover:text-gray-700 focus-visible:!ring-offset-4 sm:text-base'
            >
              {item.name}
            </UnstyledLink>
          ))}
        </div>

        <div className='mt-6'>
          <UnstyledLink
            openNewTab={false}
            href={ROUTES.REGISTER}
            className='flex w-full items-center justify-center rounded-xl border border-transparent bg-secondary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
          >
            Utwórz konto
          </UnstyledLink>
          <p className='mt-6 space-x-2 text-center text-base font-medium text-gray-500'>
            <span>Masz już konto?</span>
            <UnstyledLink
              openNewTab={false}
              href={ROUTES.LOGIN}
              className='rounded-sm text-secondary hover:text-indigo-600 focus-visible:ring-offset-2'
            >
              Zaloguj się
            </UnstyledLink>
          </p>
        </div>
      </div>
    </div>
  );
}
