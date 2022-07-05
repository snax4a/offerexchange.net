import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Offer Exchange',
  siteName: 'Offer Exchange',
  description: 'Platforma wymiany ofert handlowych',
  url: 'https://offerexchange.net',
  type: 'website',
  robots: 'follow, index',
  /** No need to be filled, will be populated with openGraph function */
  image: '/images/og-image.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@offer_exchange' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta name='publish_date' property='og:publish_date' content={meta.date} />
          <meta name='author' property='article:author' content='Szymon Sus' />
        </>
      )}

      {/* Favicons */}
      {/* Webhint */}
      <link rel='apple-touch-icon' sizes='180x180' href='/meta/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/meta/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/meta/favicon-16x16.png' />
      <link rel='manifest' href='/meta/site.webmanifest' />
      <link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#5bbad5' />
      <link rel='shortcut icon' href='/meta/favicon.ico' />
      <meta name='apple-mobile-web-app-title' content='Offer Exchange' />
      <meta name='application-name' content='Offer Exchange' />
      <meta name='msapplication-TileColor' content='#ffc40d' />
      <meta name='msapplication-config' content='/meta/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}
