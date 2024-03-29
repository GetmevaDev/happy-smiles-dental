import type { Block, Review } from './home-page';
import type { Seo } from './seo';
import type { BannerTop } from './service-page';

export interface RootAboutUsPage {
  data: AboutUsPage;
}

export interface AboutUsPage {
  id: number;
  attributes: AboutUsPageAttributes;
}

export interface AboutUsPageAttributes {
  banner: BannerTop;
  block: Block;
  ClinicAwards: ClinicAwards;
  MeetTheDoctor: MeetTheDoctor;
  ClinicGallery: ClinicGalleryI;
  seo: Seo;
  Review: Review;
}

export interface MeetTheDoctor {
  id: number;
  title: string;
  image: Image;
  name: string;
  doctorSpeciality: string;
}

export interface ClinicAwards {
  id: number;
  title: string;
  ClinicAward: ClinicAward[];
}

export interface ClinicAward {
  id: number;
  text: string;
  image: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

export interface ClinicGalleryI {
  id: number;
  title: string;
  images: {
    data: Image[];
  };
}

export interface Image {
  id: number;
  attributes: {
    name: string;
    url: string;
    width: number;
    alternativeText?: string;
    height: number;
  };
}
