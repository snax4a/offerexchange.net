import { ExclamationCircleIcon, MailIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import * as React from 'react';
import { useState } from 'react';

import ContactForm from '@/components/ContactForm';
import { FormValues } from '@/components/ContactForm/ContactForm';
import Container from '@/components/Container';
import Page from '@/components/layout/Page';
import SectionHeading from '@/components/SectionHeading';
import Seo from '@/components/Seo';

import { siteConfig } from '@/config/site';

import SquaresPattern from '~/svg/squares-pattern.svg';

export default function SupportPage() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const showResult = isSuccess || (isError && !isSubmitting);

  const resetState = () => {
    setIsError(false);
    setIsSuccess(false);
  };

  const onSubmit = async (values: FormValues) => {
    resetState();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      setIsError(true);
      console.error('Contact form submit errror:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Page>
      <Seo title={`${siteConfig.siteName} | Centrum pomocy`} />

      <section className='overflow-hidden bg-white py-16'>
        <Container className='relative mx-auto max-w-xl'>
          <SquaresPattern
            width={404}
            height={404}
            className='absolute left-full translate-x-1/2 transform text-secondary/20'
          />
          <SquaresPattern
            width={404}
            height={404}
            className='absolute right-full bottom-0 -translate-x-1/2 transform text-secondary/20'
          />

          <SectionHeading
            heading='Skontaktuj się z nami'
            subheading='Nasz zespół wsparcia jest zawsze gotowy do pomocy.'
          />

          {showResult ? (
            <ActionResult
              onClose={resetState}
              type={isSuccess ? 'success' : 'error'}
              content={
                isSuccess ? (
                  <>
                    Wiadomość została wysłana
                    <br />
                    Wkrótce na nią odpiwiemy
                  </>
                ) : (
                  <>
                    Wystąpił błąd
                    <br />
                    Spróbuj ponownie później
                  </>
                )
              }
              Icon={isSuccess ? MailIcon : ExclamationCircleIcon}
            />
          ) : (
            <ContactForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
          )}
        </Container>
      </section>
    </Page>
  );
}

interface ActionResultProps {
  type: 'success' | 'error';
  content: string | React.ReactNode;
  Icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  onClose: () => void;
}

function ActionResult({ Icon, type, content, onClose }: ActionResultProps) {
  return (
    <div className='relative flex flex-col items-center justify-center py-10 text-center'>
      {Icon && (
        <Icon
          width={100}
          height={100}
          className={clsx('animate-bounce', {
            'text-secondary': type === 'success',
            'text-red-400': type === 'error',
          })}
        />
      )}
      <h3 className='font-medium leading-9'>{content}</h3>
      <XIcon
        className='absolute top-0 right-0 h-5 w-5 transform cursor-pointer transition duration-500 ease-in-out hover:rotate-180'
        onClick={onClose}
      />
    </div>
  );
}
