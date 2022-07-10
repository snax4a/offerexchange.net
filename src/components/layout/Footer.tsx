import clsx from 'clsx';
import * as React from 'react';

import { ROUTES } from '@/lib/constants';

import Container from '@/components/Container';
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
        <Container className='pt-10 md:pt-12 lg:pt-10'>
          <hr className='border-border dark:border-border-dark' />
        </Container>
        <footer className='py-12 text-primary sm:py-12 md:py-16 lg:py-14'>
          <Container className='grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 xl:grid-cols-4 xl:gap-x-12'>
            <div className='order-last col-span-2 flex flex-col justify-self-center sm:order-first sm:col-span-1 sm:justify-self-start'>
              <UnstyledLink href={ROUTES.HOME}>
                <div>
                  <Logo className='mt-2 h-7 w-44 text-9xl xl:w-48' />
                </div>
              </UnstyledLink>
              <UnstyledLink href={siteConfig.copyrightUrl}>
                <div className='mt-3 pr-0.5 text-left text-xs lg:text-sm'>
                  {siteConfig.copyright}
                </div>
              </UnstyledLink>
            </div>

            <div className='flex flex-col'>
              <FooterLink isHeader={true}>Produkt</FooterLink>
              <FooterLink href={ROUTES.FEATURES}>Funkcje aplikacji</FooterLink>
              <FooterLink href={ROUTES.PRICING}>Cennik aplikacji</FooterLink>
              <FooterLink href={ROUTES.FAQ}>Często zadawane pytania</FooterLink>
              <FooterLink href={ROUTES.LOGIN}>Zaloguj się</FooterLink>
              <FooterLink href={ROUTES.REGISTER}>Utwórz konto</FooterLink>
            </div>

            <div className='flex flex-col'>
              <FooterLink isHeader={true}>Ważne linki</FooterLink>
              <FooterLink href={ROUTES.RULES}>Regulamin aplikacji</FooterLink>
              <FooterLink href={ROUTES.PRIVACY_POLICY}>Polityka prywatności</FooterLink>
              {/* <FooterLink href={ROUTES.ABOUT}>O naszej firmie</FooterLink> */}
            </div>

            <div className='flex flex-col sm:col-start-2 xl:col-start-4'>
              <FooterLink isHeader={true}>Kontakt</FooterLink>
              <FooterLink href={ROUTES.SUPPORT}>Pomoc techniczna</FooterLink>
              <FooterLink href={ROUTES.SUPPORT}>Dział sprzedaży</FooterLink>
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
          </Container>
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
    'text-md font-normal text-primary dark:text-primary-dark': !isHeader,
    'text-lg text-primary my-2 font-bold': isHeader,
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
