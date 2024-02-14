import type { Image } from './about-us-page';
import type { Images } from './image';
import type { ContentBlock, RichBlockText } from './rich-block';
import type { Seo } from './seo';

export interface RootHomePageI {
  data: Data;
}

export interface Data {
  attributes: HomePageI;
}

export interface HomePageI {
  Block: Block;
  Banner: Banner;
  Slider: Slider;
  seo: Seo;

  ChooseBlock: ChooseBlock;
  OurServices: OurServiceI[];
}

export interface Banner {
  id: number;
  title: string;
  description: ContentBlock[];
  image: Images;
}

export interface Slider {
  id: number;
  title: string;
  SliderCard: SliderCardI[];
}

export interface SliderCardI {
  id: number;
  title: string;
  description: string;
}

export interface Block {
  id: number;
  title: string;
  description: string;
  phone: string;
  image: Images;
}

export interface ChooseBlock {
  id: number;
  title: string;
  description: string;
  ChooseBlockCard: ChooseCardI[];
}

export interface OurServiceI {
  id: number;
  name_service: string;
  Service: Service;
}

export interface Service {
  id: number;
  title: string;
  services: {
    data: OurServicesDataI[];
  };
}

export interface OurServicesDataI {
  id: number;
  attributes: OurServicesAttributes;
}

export interface OurServicesAttributes {
  slug: string;
  content: string;
  title: string;
  description: string;
  bgImage: Image;
  button: boolean;
}

export interface ChooseCardI {
  id: number;
  title: string;
  description: string;
  image: Images;
}

export interface ServiceSlug {
  data: {
    attributes: {
      slug: string;
    };
  };
}
