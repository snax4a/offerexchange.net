import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';
import { Fragment } from 'react';

import { ROUTES } from '@/lib/constants';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import UnstyledLink from '@/components/links/UnstyledLink';
import { featureItems, navigationItems } from '@/components/navigation/navigationData';

export default function DesktopNavigation() {
  return (
    <Fragment>
      <Popover.Group
        as='nav'
        className='hidden flex-1 justify-center space-x-8 md:flex lg:space-x-10'
      >
        <FeatureItems />
        <NavigationItems />
      </Popover.Group>
      <div className='hidden flex-1 items-center justify-end md:flex'>
        <UnstyledLink
          openNewTab={false}
          href={ROUTES.LOGIN}
          className='whitespace-nowrap rounded-md text-base font-medium text-gray-500 hover:text-gray-900 focus-visible:ring-offset-4'
        >
          Zaloguj się
        </UnstyledLink>
        <UnstyledLink
          openNewTab={false}
          href={ROUTES.REGISTER}
          className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-transparent bg-secondary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
        >
          Utwórz konto
        </UnstyledLink>
      </div>
    </Fragment>
  );
}

function FeatureItems() {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-offset-4 focus:outline-focus [&:not(:focus-visible)]:focus:outline-none'
            )}
          >
            <span className='whitespace-nowrap'>Funkcje aplikacji</span>
            <ChevronDownIcon
              className={clsx(
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden='true'
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 -ml-16 mt-4 w-screen max-w-md transform lg:max-w-3xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                  {featureItems.map((item) => (
                    <UnstyledLink
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                    >
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-secondary/90 text-white sm:h-12 sm:w-12'>
                        <item.icon className='h-6 w-6' aria-hidden='true' />
                      </div>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>{item.name}</p>
                        <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                      </div>
                    </UnstyledLink>
                  ))}
                </div>
                <div className='bg-gray-50 p-5 sm:p-8'>
                  <UnstyledLink
                    href={ROUTES.SUPPORT}
                    className='-m-3 flow-root rounded-md p-3 hover:bg-gray-100'
                  >
                    <div className='flex flex-col items-center lg:flex-row'>
                      <div className='text-base font-medium text-gray-900'>
                        Masz pomysł na usprawnienie naszego systemu?
                      </div>
                      <span className='order-first mb-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800 lg:order-last lg:mb-0 lg:ml-3'>
                        Nowa funkcjonalność
                      </span>
                    </div>
                    <p className='mt-1 text-sm text-gray-500'>
                      Skontakuj się z nami. Staramy się stale usprawniać nasze
                      rozwiązanie.
                    </p>
                  </UnstyledLink>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function NavigationItems() {
  const reached900px = useMediaQuery('(min-width: 900px)');
  const reached1250px = useMediaQuery('(min-width: 1250px)');
  const regularItemsCount = reached1250px ? 2 : reached900px ? 1 : 0;
  const regularItems = navigationItems.slice(0, regularItemsCount);
  const popoverItems = navigationItems.slice(regularItemsCount);

  return (
    <Fragment>
      {regularItems.map((item) => (
        <UnstyledLink
          href={item.href}
          key={`${item.name}-regular`}
          className='rounded-md text-base font-medium text-gray-500 hover:text-gray-900 focus-visible:ring-offset-4'
        >
          {item.name}
        </UnstyledLink>
      ))}
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={clsx(
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-offset-4 focus:outline-focus [&:not(:focus-visible)]:focus:outline-none'
              )}
            >
              <span>Więcej</span>
              <ChevronDownIcon
                className={clsx(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    {popoverItems.map((item) => (
                      <UnstyledLink
                        href={item.href}
                        key={`${item.name}-popover`}
                        className='-m-3 block rounded-md p-3 hover:bg-gray-50'
                      >
                        <p className='text-base font-medium text-gray-900'>{item.name}</p>
                        <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                      </UnstyledLink>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Fragment>
  );
}
