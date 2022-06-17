import clsxm from '@/lib/clsxm';

interface SectionHeadingProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

export default function SectionHeading({
  heading,
  subheading,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsxm('my-20 text-center', className)}>
      {!!heading && (
        <h3 className='mb-4 text-2xl font-bold text-primary md:mb-5 md:text-3xl'>
          {heading}
        </h3>
      )}
      {!!subheading && (
        <p className='text-base font-light text-slate-700 md:text-lg'>{subheading}</p>
      )}
    </div>
  );
}
