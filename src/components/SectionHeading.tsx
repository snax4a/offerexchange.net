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
    <div className={clsxm('my-14 mx-auto max-w-4xl text-center md:my-20', className)}>
      {!!heading && (
        <h3 className='text-2xl font-extrabold text-primary sm:text-4xl'>{heading}</h3>
      )}
      {!!subheading && (
        <p className='mt-3 text-base text-gray-500 sm:mt-4 md:text-xl'>{subheading}</p>
      )}
    </div>
  );
}
