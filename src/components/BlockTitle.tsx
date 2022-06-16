import clsxm from '@/lib/clsxm';

interface BlockTitleProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function BlockTitle({ title, subtitle, className }: BlockTitleProps) {
  return (
    <div className={clsxm('my-20 text-center', className)}>
      <h3 className='mb-4 text-2xl font-bold text-primary md:mb-5 md:text-3xl'>
        {title}
      </h3>
      <p className='text-base font-light text-slate-700 md:text-lg'>{subtitle}</p>
    </div>
  );
}
