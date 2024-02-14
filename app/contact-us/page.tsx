import { Banner } from '@/components';
import { WorkingHours } from '@/components/WorkingHours/WorkingHours';
import type { RootContactUsPage } from '@/types/contact-us-page';
import { fetchAPI } from '@/utils/api/fetchApi';

export default async function Page() {
  const { data } = await fetchAPI<RootContactUsPage>('contact-us-page');

  return (
    <main>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />

      <WorkingHours
        address={data?.attributes?.hours?.address}
        hours={data?.attributes?.hours?.workingHour}
        title={data?.attributes?.hours?.title}
      />
    </main>
  );
}
