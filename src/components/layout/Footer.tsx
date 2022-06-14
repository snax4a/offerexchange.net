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
      <div className='mt-auto w-full self-stretch'>
        <div className='mx-auto w-full px-5 pt-10 sm:px-12 md:px-12 md:pt-12 lg:pt-10'>
          <hr className='border-border dark:border-border-dark layout' />
        </div>
        <footer className='py-12 px-5 text-primary sm:px-12 sm:py-12 md:px-12 md:py-16 lg:py-14'>
          <div className='layout grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 xl:grid-cols-4'>
            <div className='order-last col-span-2 flex flex-col justify-self-center sm:order-first sm:col-span-1 sm:justify-self-start'>
              <UnstyledLink href='/'>
                <div>
                  <Logo
                    className='mt-4 w-44 text-9xl xl:w-48'
                    height='auto'
                    width='auto'
                  />
                </div>
              </UnstyledLink>
              <UnstyledLink href='https://conetso.com'>
                <div className='mt-3 pr-0.5 text-left text-xs'>
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
              <div className='mt-8 flex flex-row gap-x-2'>
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
