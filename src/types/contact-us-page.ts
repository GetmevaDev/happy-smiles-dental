import type { Seo } from './seo';
import type { BannerTop } from './service-page';

export interface RootContactUsPage {
  data: ContactUsPageData;
}

export interface ContactUsPageData {
  id: number;
  attributes: ContactUsPageAttributes;
}

export interface ContactUsPageAttributes {
  banner: BannerTop;
  hours: Hours;
  seo: Seo;
}

export interface Hours {
  id: number;
  title: string;
  workingHour: WorkingHour[];
  address: string;
}

export interface WorkingHour {
  id: number;
  day: string;
  time: string;
}
