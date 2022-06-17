import { StaticImageData } from 'next/image';

export type Maybe<T> = T | null | undefined;
export type BillingInterval = 'month' | 'year';

export interface PricingPlan {
  id: string;
  active: boolean;
  nickname: string;
  amount: number;
  currency: string;
  interval: BillingInterval;
  metadata: {
    numberOfInquiries: number;
    numberOfRecipients: number;
    numberOfProducts: number;
    numberOfOffers: number;
    numberOfOrders: number;
  };
}

export interface Feature {
  image: StaticImageData;
  text: string;
  heading: string;
  href?: string;
}
