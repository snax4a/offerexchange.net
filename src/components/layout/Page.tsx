import * as React from 'react';

import Footer from '@/components/layout/Footer';
import SocialBanner from '@/components/SocialBanner';

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_SHOW_SOCIAL_BANNER === 'true' && (
        <SocialBanner
          bannerText={process.env.NEXT_PUBLIC_SOCIAL_BANNER_TEXT ?? ''}
          bannerLink={process.env.NEXT_PUBLIC_SOCIAL_BANNER_LINK ?? ''}
          bannerLinkText={process.env.NEXT_PUBLIC_SOCIAL_BANNER_LINK_TEXT ?? ''}
        />
      )}
      <div className='flex h-auto flex-row lg:h-screen'>
        {/* No fallback UI so need to be careful not to suspend directly inside. */}
        <React.Suspense fallback={null}>
          <div className='flex h-full w-full flex-1 self-stretch'>
            <main className='mt-16 flex grow flex-col justify-around self-stretch sm:mt-10'>
              {children}
              <Footer />
            </main>
          </div>
        </React.Suspense>
      </div>
    </>
  );
}
