import clsx from 'clsx';
import Image from 'next/future/image';
import React, { useMemo, useState } from 'react';

import { useIsDesktop } from '@/hooks/useMediaQuery';

import PriceCard from '@/components/cards/PriceCard';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

import { pricingPlanData, recommendedPlanName } from '@/config/pricing-plans';

import { BillingInterval } from '@/types';

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('month');
  const isDesktop = useIsDesktop();

  const availablePlans = useMemo(
    () =>
      pricingPlanData.filter((plan) => plan.active && plan.interval === billingInterval),
    [billingInterval]
  );

  const listItemClasses =
    'flex min-h-[50px] items-center [&+li]:border-t border-slate-300/70 font-medium xl:min-h-[59px]';

  return (
    <section id='pricing' className='mb-20 scroll-mt-10 sm:scroll-mt-20'>
      <Container>
        <SectionHeading
          className='lg:mb-16'
          heading='Plany cenowe'
          subheading='Poznaj plany cenowe dopasowane do Twoich potrzeb'
        />
        <BillingIntervalSwitch
          selectedInterval={billingInterval}
          setBillingInterval={setBillingInterval}
        />
        <div className='grid grid-cols-1 justify-center lg:mt-24 lg:grid-cols-[250px_1fr]'>
          {isDesktop && (
            <ul className='mt-[163.5px] text-sm xl:mt-[167.5px] xl:text-base'>
              <li className={listItemClasses}>Liczba zapytań</li>
              <li className={listItemClasses}>Liczba odbiorców zapytania</li>
              <li className={listItemClasses}>Liczba produktów w zapytaniu</li>
              <li className={listItemClasses}>Liczba ofert</li>
              <li className={listItemClasses}>Liczba zamówień</li>
            </ul>
          )}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-3'>
            {availablePlans.map((plan) => (
              <PriceCard
                key={plan.id}
                data={plan}
                isRecommended={plan.nickname === recommendedPlanName}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

interface BillingIntervalSwitchProps {
  selectedInterval: BillingInterval;
  setBillingInterval: (interval: BillingInterval) => void;
}

function BillingIntervalSwitch({
  selectedInterval,
  setBillingInterval,
}: BillingIntervalSwitchProps) {
  const buttonClasses =
    'm-1 whitespace-nowrap rounded-lg py-2 px-4 text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 grow w-auto sm:px-8 border border-transparent';

  return (
    <div className='mb-12 flex justify-center'>
      <div className='flex flex-wrap rounded-xl border border-secondary/20 bg-secondary/10 p-0.5'>
        <button
          onClick={() => setBillingInterval('month')}
          type='button'
          className={clsx(
            buttonClasses,
            selectedInterval === 'month'
              ? 'bg-secondary text-white shadow-sm'
              : 'text-primary'
          )}
        >
          Rozliczenie miesięczne
        </button>
        <button
          onClick={() => setBillingInterval('year')}
          type='button'
          className={clsx(
            'relative',
            buttonClasses,
            selectedInterval === 'year' ? 'bg-secondary text-white ' : 'text-primary'
          )}
        >
          Rozliczenie roczne
          <Image
            src='/images/3-months-extra.webp'
            width={170}
            height={79}
            alt='3 miesiące gratis'
            className='absolute -right-[147px] bottom-0 hidden rotate-[15deg] transform md:block'
          />
        </button>
      </div>
    </div>
  );
}
