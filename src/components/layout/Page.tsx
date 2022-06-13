import * as React from 'react';

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <>
      <div className='h-auto lg:h-screen flex flex-row'>
        {/* No fallback UI so need to be careful not to suspend directly inside. */}
        <React.Suspense fallback={null}>
          <div className='flex flex-1 w-full h-full self-stretch'>
            <main className='flex grow self-stretch mt-16 sm:mt-10 flex-col justify-around'>
              {children}
            </main>
          </div>
        </React.Suspense>
      </div>
    </>
  );
}
