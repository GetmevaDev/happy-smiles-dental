import type { Seo } from './seo';
import type { BannerTop } from './service-page';

export interface DoctorPageRootI {
  data: DoctorPageData;
}

export interface DoctorPageData {
  id: number;
  attributes: DoctorPageAttributes;
}

export interface DoctorPageAttributes {
  banner: BannerTop;
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
        name: string;
        width: number;
        height: number;
      };
    };
  };
  seo: Seo;
}
