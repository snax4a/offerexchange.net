import { StaticImageData } from 'next/image';

export interface TestimonialAuthor {
  name: string;
  role: string;
  image: StaticImageData;
}

export interface Testimonial {
  content: string;
  author: TestimonialAuthor;
}

interface TestimonialProps {
  author: TestimonialAuthor;
  children: React.ReactNode;
}

export default function Testimonial({ author, children }: TestimonialProps) {
  return (
    <figure className='rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5'>
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className='mt-6 flex items-center'>
        <div className='relative h-12 w-12 overflow-hidden rounded-full bg-slate-50'>
          {/* <Image src={author.image} alt='' /> */}
          <div className='h-12 w-12 rounded-full bg-gray-300' />
        </div>
        <div className='ml-4'>
          <div className='text-base font-medium leading-6 tracking-tight text-slate-900'>
            {author.name}
          </div>
          <div className='mt-1 text-sm text-slate-600'>{author.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
