import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

interface SocialBannerProps {
  bannerText: string;
  bannerLink: string;
  bannerLinkText: string;
}

export default function SocialBanner(props: SocialBannerProps) {
  const { bannerText, bannerLink, bannerLinkText } = props;

  return (
    <div className='w-full bg-gray-100 dark:bg-gray-700 fixed py-2 h-16 sm:h-10 sm:py-0 flex items-center justify-center flex-col sm:flex-row z-[100]'>
      {bannerText}
      <UnderlineLink
        className='ml-0 sm:ml-2 text-link dark:text-link-dark'
        href={bannerLink}
      >
        {bannerLinkText}
      </UnderlineLink>
    </div>
  );
}
