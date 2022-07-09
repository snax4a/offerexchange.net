import clsx from 'clsx';
import Image from 'next/future/image';

import clsxm from '@/lib/clsxm';

import { Feature } from '@/types';

interface FeatureCardProps {
  feature: Feature;
  type?: 'left' | 'right';
  withArrow?: boolean;
  arrowClassNames?: string;
}

export default function FeatureCard({
  feature,
  type = 'left',
  withArrow,
  arrowClassNames,
}: FeatureCardProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8'>
      <Image
        className={clsx('h-auto max-h-44 w-auto lg:max-h-[280px]', {
          'lg:order-first': type === 'left',
          'lg:order-last': type === 'right',
        })}
        src={feature.image}
        alt={feature.heading}
        quality={100}
      />
      {withArrow && (
        <div
          className={clsxm(
            'hidden lg:block',
            'dashed-arrow relative transform [&::before]:-right-64 [&::before]:-bottom-4',
            {
              'rotate-[80deg] scale-y-[-1] [&::before]:-bottom-0': type === 'left',
              'right-0 order-2 rotate-[90deg]': type === 'right',
            },
            arrowClassNames
          )}
        />
      )}
      <div
        className={clsx('max-w-xs text-center lg:max-w-lg', {
          'lg:text-right': type === 'right',
          'lg:text-left': type === 'left',
        })}
      >
        <h4 className='text-xl font-bold text-primary md:text-3xl'>{feature.heading}</h4>
        <p className='my-4 text-base font-light text-slate-700 md:text-xl'>
          {feature.text}
        </p>
      </div>
    </div>
  );
}
