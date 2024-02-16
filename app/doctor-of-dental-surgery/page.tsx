import { Banner, Brightness } from '@/components';
import type { DoctorPageRootI } from '@/types/doctor-page';
import { fetchAPI } from '@/utils/api/fetchApi';

export default async function Page() {
  const { data } = await fetchAPI<DoctorPageRootI>('doctor-page');

  return (
    <main>
      <Banner
        button={data?.attributes?.banner?.button}
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />
      <Brightness
        background
        description={data?.attributes?.description}
        height={501}
        image={data?.attributes?.image?.data?.attributes?.url}
        title={data?.attributes?.title}
        width={343}
      />
    </main>
  );
}
