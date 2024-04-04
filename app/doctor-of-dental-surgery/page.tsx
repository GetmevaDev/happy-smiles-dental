import { headers } from 'next/headers';
import { useRouter } from 'next/router';

import { Banner, Brightness } from '@/components';
import type { DoctorPageRootI } from '@/types/doctor-page';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<DoctorPageRootI>('doctor-page');

  return generateSeoMetaData(data, 'doctor-of-dental-surgery');
}

export default async function Page() {
  const { data } = await fetchAPI<DoctorPageRootI>('doctor-page');

  return (
    <div>
      <Banner
        alternativeText={data?.attributes?.banner?.bgImage?.data?.attributes?.alternativeText}
        button={data?.attributes?.banner?.button}
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />
      <Brightness
        alternativeText={data?.attributes?.image?.data?.attributes?.alternativeText}
        background
        description={data?.attributes?.description}
        height={501}
        image={data?.attributes?.image?.data?.attributes?.url}
        title={data?.attributes?.title}
        width={343}
      />
    </div>
  );
}
