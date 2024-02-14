import type { Seo } from './seo';
import type { BannerTop } from './service-page';

export interface PatientSurveyRoot {
  data: PatientSurveyRootData;
}

export interface PatientSurveyRootData {
  id: number;
  attributes: PatientSurveyRootAttributes;
}

export interface PatientSurveyRootAttributes {
  banner: BannerTop;
  seo: Seo;
}
