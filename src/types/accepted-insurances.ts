import type { Seo } from './seo';
import type { BannerTop } from './service-page';

export interface AcceptedInsuranceRoot {
  data: {
    id: number;
    attributes: AcceptedInsurance;
  };
}

export interface AcceptedInsurance {
  banner: BannerTop;
  insurances: Insurances;
  SmileClub: SmileClub;
  createdAt: string;
  seo: Seo;
  updatedAt: string;
  publishedAt: string;
}

export interface SmileClub {
  id: number;
  title: string;
  subTitle: string;
  includes_title: string;
  priceTitle: string;
  note: string;
  price: Price[];
  include: Include[];
}

export interface Include {
  id: number;
  text: string;
}

export interface Price {
  id: number;
  text: string;
  price: string;
}

export interface Insurances {
  id: number;
  title: string;
  InsuranceCard: InsuranceCard[];
}

export interface InsuranceCard {
  id: number;
  title: string;
}
