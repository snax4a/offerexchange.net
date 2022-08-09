import clsx from 'clsx';

import { formatPrice } from '@/lib/helper';

import { PricingPlan } from '@/types';

interface PriceCardProps {
  data: PricingPlan;
  isRecommended: boolean;
}

export default function PriceCard({ data, isRecommended }: PriceCardProps) {
  const {
    numberOfInquiries,
    numberOfRecipients,
    numberOfProducts,
    numberOfOffers,
    numberOfOrders,
  } = data.metadata;

  const listItemClasses =
    'flex items-center justify-between lg:justify-center min-h-[50px] xl:min-h-[59px] [&+li]:border-t border-slate-300/70';

  return (
    <article
      className={clsx(
        'relative rounded-xl border border-slate-300/70 bg-white px-7 text-center text-primary duration-150 lg:rounded-2xl lg:px-0',
        'hover:border-secondary/20 hover:bg-slate-100/70',
        {
          'border-t-0 !border-secondary lg:rounded-t-none': isRecommended,
        }
      )}
    >
      {isRecommended && (
        <div
          className={clsx(
            '-mx-7 rounded-t-xl bg-secondary py-1 font-medium uppercase tracking-widest text-white lg:-mx-0 lg:rounded-t-2xl',
            'lg:absolute lg:-top-7 lg:-left-[1px] lg:-right-[1px]'
          )}
        >
          Zalecany
        </div>
      )}

      <header className='mt-8'>
        <h4 className='text-lg font-medium text-secondary/90'>{data.nickname}</h4>
        <h3 className='mt-4 text-2xl lg:text-xl xl:text-2xl'>
          {formatPrice(data.amount / 100, 'pl', data.currency)} /{' '}
          <small className='font-normal'>
            {data.interval === 'month' ? 'msc.' : 'rok'}
          </small>
        </h3>
        <small className='text-slate-400'>netto</small>
      </header>

      <ul className='my-8'>
        <li className={listItemClasses}>
          <span className='lg:hidden'>Liczba zapytań</span>
          <NumberOrInfinitySymbol number={numberOfInquiries} />
        </li>
        <li className={listItemClasses}>
          <span className='lg:hidden'>Liczba odbiorców zapytania</span>
          <NumberOrInfinitySymbol number={numberOfRecipients} />
        </li>
        <li className={listItemClasses}>
          <span className='lg:hidden'>Liczba produktów w zapytaniu</span>
          <NumberOrInfinitySymbol number={numberOfProducts} />
        </li>
        <li className={listItemClasses}>
          <span className='lg:hidden'>Liczba ofert</span>
          <NumberOrInfinitySymbol number={numberOfOffers} />
        </li>
        <li className={listItemClasses}>
          <span className='lg:hidden'>Liczba zamówień</span>
          <NumberOrInfinitySymbol number={numberOfOrders} />
        </li>
      </ul>
    </article>
  );
}

function NumberOrInfinitySymbol({ number }: { number: number }) {
  if (isFinite(number)) return <span className='font-semibold'>{number}</span>;
  return <span className='text-xl font-bold text-secondary'>&infin;</span>;
}
