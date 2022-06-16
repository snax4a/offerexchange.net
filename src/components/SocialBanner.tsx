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
    <div className='fixed z-[100] flex h-16 w-full flex-col items-center justify-center bg-gray-100 py-2 dark:bg-gray-700 sm:h-10 sm:flex-row sm:py-0'>
      {bannerText}
      <UnderlineLink
        className='text-link dark:text-link-dark ml-0 sm:ml-2'
        href={bannerLink}
      >
        {bannerLinkText}
      </UnderlineLink>
    </div>
  );
}
