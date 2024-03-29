import { Banner, Form } from '@/components';
import type { PatientSurveyRoot } from '@/types/patient-survey';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<PatientSurveyRoot>('patient-survey-page');

  return generateSeoMetaData(data);
}

export default async function Page() {
  const { data } = await fetchAPI<PatientSurveyRoot>('patient-survey-page');

  return (
    <div>
      <Banner
        alternativeText={data?.attributes?.banner?.bgImage?.data?.attributes?.alternativeText}
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        title={data?.attributes?.banner?.title}
      />

      <Form />
    </div>
  );
}
