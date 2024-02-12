import type { Image } from './about-us-page';
import type { Seo } from './seo';
import type { BannerTop } from './service-page';

export interface RootTechnologyPage {
  data: TechnologyPage;
}

export interface TechnologyPage {
  id: number;
  attributes: TechnologyPageAttributes;
}

export interface TechnologyPageAttributes {
  banner: BannerTop;
  blockTop: BlockTop;
  blocks: BlockTop[];
  seo: Seo;
}

export interface BlockTop {
  id: number;
  title: string;
  description: string;
  phone: string;
  image: {
    data: Image;
  };
  subTitle: string;
}
