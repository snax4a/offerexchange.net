import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

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
        className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 pt-4 transition md:hidden'
      >
        <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='px-5 pt-5 pb-6'>
            <div className='flex items-center justify-between'>
              <div>
                <Logo className='w-44 text-9xl xl:w-48' height='auto' width='auto' />
              </div>
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
                    className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50 focus-visible:ring-inset'
                  >
                    <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white'>
                      <item.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>
                      {item.name}
                    </div>
                  </UnstyledLink>
                ))}
              </nav>
            </div>
          </div>

          <div className='py-6 px-5'>
            <div className='grid grid-cols-2 gap-4'>
              {navigationItems.map((item) => (
                <UnstyledLink
                  key={item.name}
                  href={item.href}
                  className='rounded-sm text-base font-medium text-gray-900 hover:text-gray-700 focus-visible:!ring-offset-4'
                >
                  {item.name}
                </UnstyledLink>
              ))}
            </div>

            <div className='mt-6'>
              <UnstyledLink
                openNewTab={false}
                href={ROUTES.REGISTER}
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Utwórz konto
              </UnstyledLink>
              <p className='mt-6 text-center text-base font-medium text-gray-500'>
                Masz już konto?{' '}
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
      </Popover.Panel>
    </Transition>
  );
}
