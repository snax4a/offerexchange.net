import NextImage from '@/components/NextImage';

import { Feature } from '@/types';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className='flex gap-6 lg:gap-8'>
      <div>
        <NextImage
          useSkeleton
          className='w-18 shrink-0 md:w-24'
          src={feature.image}
          alt={feature.heading}
          layout='fixed'
        />
      </div>
      <div className=''>
        <h4 className='text-lg font-bold text-primary'>{feature.heading}</h4>
        <p className='my-4 text-base font-light text-slate-700'>{feature.text}</p>
      </div>
    </div>
  );
}
