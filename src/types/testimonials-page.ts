import type { Slider } from './home-page';
import type { Seo } from './seo';
import type { BannerTop } from './service-page';

export interface TestimonialsPageRoot {
  data: TestimonialsPageData;
}

export interface TestimonialsPageData {
  id: number;
  attributes: TestimonialsPageAttributes;
}

export interface TestimonialsPageAttributes {
  banner: BannerTop;
  slider: Slider;
  videoUrl: string;
  seo: Seo;
}
