import type { Banner } from './home-page';
import type { Images } from './image';

export interface RootServicePage {
  data: DataService;
}

export interface DataService {
  id: number;
  attributes: ServicePageI;
}

export interface ServicePageI {
  banner: BannerTop;
  Faq: Faq;
  ForPatients: ForPatient[];
  slug: string;
  service_category: Categories;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Categories {
  data: ServiceCategory;
}

export interface ServiceCategory {
  id: number;
  attributes: Category;
}

export interface Category {
  category: string;
}

export interface ForPatient {
  id: number;
  name: string;
  PatientInfo: PatientInfo[];
}

export interface PatientInfo {
  id: number;
  title: string;
  content: string;
  image: Images;
}

export interface Faq {
  id: number;
  title: string;
  FaqItem: FaqItem[];
}

export interface FaqItem {
  id: number;
  title: string;
  content: string;
}

export interface BannerTop {
  title: string;
  subTitle: string;
  button?: boolean;
  id: number;
  bgImage: Images;
}