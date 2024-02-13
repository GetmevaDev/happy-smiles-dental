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
}
