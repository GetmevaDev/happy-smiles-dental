import { Banner, Form } from '@/components';
import type { PatientSurveyRoot } from '@/types/patient-survey';
import { fetchAPI } from '@/utils/api/fetchApi';

export default async function Page() {
  const { data } = await fetchAPI<PatientSurveyRoot>('patient-survey-page');

  return (
    <main>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        title={data?.attributes?.banner?.title}
      />

      <Form />
    </main>
  );
}
