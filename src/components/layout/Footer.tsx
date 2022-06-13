import clsx from 'clsx';
import * as React from 'react';

import { IconFacebookCircle } from '@/components/icons/IconFacebookCircle';
import { IconTwitter } from '@/components/icons/IconTwitter';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/config/site';

import Logo from '~/svg/logo.svg';

export default function Footer() {
  const socialLinkClasses = 'text-primary hover:text-blue-500 duration-200';
  return (
    <>
      <div className='self-stretch w-full sm:pl-0 lg:pl-80 sm:pr-0 2xl:pr-80 pl-0 pr-0 mt-auto'>
        <div className='mx-auto w-full px-5 sm:px-12 md:px-12 pt-10 md:pt-12 lg:pt-10'>
          <hr className='max-w-7xl mx-auto border-border dark:border-border-dark' />
        </div>
        <footer className='text-primary py-12 px-5 sm:px-12 md:px-12 sm:py-12 md:py-16 lg:py-14'>
          <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8 max-w-7xl mx-auto'>
            <div className='order-last justify-self-center sm:justify-self-start sm:order-first col-span-2 sm:col-span-1 flex flex-col'>
              <UnstyledLink href='/'>
                <div>
                  <Logo
                    className='mt-4 w-48 text-9xl'
                    height='auto'
                    width='auto'
                  />
                </div>
              </UnstyledLink>
              <UnstyledLink href='https://conetso.com'>
                <div className='text-xs text-left mt-3 pr-0.5'>
                  {siteConfig.copyright}
                </div>
              </UnstyledLink>
            </div>

            <div className='flex flex-col'>
              <FooterLink isHeader={true}>Produkt</FooterLink>
              <FooterLink href='/features'>Jak to działa</FooterLink>
              <FooterLink href='/pricing'>Cennik</FooterLink>
              <FooterLink href='/faq'>FAQ</FooterLink>
            </div>

            <div className='flex flex-col'>
              <FooterLink isHeader={true}>Ważne linki</FooterLink>
              <FooterLink href='/terms'>Regulamin</FooterLink>
              <FooterLink href='/privacy'>Polityka prywatności</FooterLink>
              <FooterLink href='/about'>O nas</FooterLink>
            </div>

            <div className='flex flex-col sm:col-start-2 xl:col-start-4'>
              <FooterLink isHeader={true}>Kontakt</FooterLink>
              <FooterLink href='/support'>Pomoc techniczna</FooterLink>
              <FooterLink href='/contact-sales'>Dział sprzedaży</FooterLink>
              <div className='flex flex-row mt-8 gap-x-2'>
                <UnstyledLink
                  aria-label={`${siteConfig.siteName} on Facebook`}
                  href={siteConfig.faceBookUrl}
                  className={socialLinkClasses}
                >
                  <IconFacebookCircle />
                </UnstyledLink>
                <UnstyledLink
                  aria-label={`${siteConfig.siteName} on Twitter`}
                  href={siteConfig.twitterUrl}
                  className={socialLinkClasses}
                >
                  <IconTwitter />
                </UnstyledLink>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function FooterLink({
  href,
  children,
  isHeader = false,
}: {
  href?: string;
  children: React.ReactNode;
  isHeader?: boolean;
}) {
  const classes = clsx('border-b inline-block border-transparent', {
    'text-sm font-normal text-primary dark:text-primary-dark': !isHeader,
    'text-md text-primary my-2 font-bold': isHeader,
    'hover:border-gray-400': href,
  });

  if (!href) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <div>
      <UnderlineLink href={href} className={classes}>
        {children}
      </UnderlineLink>
    </div>
  );
}
