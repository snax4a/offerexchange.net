export const IS_PROD = process.env.NODE_ENV === 'production';

/**
 * Console log greeting message
 * @see _app.tsx
 */
export const sayHelloFlag = IS_PROD;

export const ROUTES = {
  HOME: '/',
  FEATURES: '/#features',
  PRICING: '/#pricing',
  FAQ: '/#faq',
  ABOUT: '/about-us',
  SUPPORT: '/support',
  RULES: '/rules',
  PRIVACY_POLICY: '/privacy-policy',
  LOGIN: 'https://beta.offerexchange.net/auth/login',
  REGISTER: 'https://beta.offerexchange.net/auth/register',
  NOT_FOUND: '/404',
};
