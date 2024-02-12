'use client';

import type { Metadata } from 'next';

import { Banner, Brightness, Info } from '@/components';
import type { RootTechnologyPage } from '@/types/technology-page';
import { fetchAPI } from '@/utils/api/fetchApi';

// export const metadata: Metadata = {
//   title: 'Technology'
// };

export default async function Page() {
  const { data } = await fetchAPI<RootTechnologyPage>('technology-page');

  console.log(data, 'data');

  return (
    <main>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        title={data?.attributes?.banner?.title}
      />
      <Brightness
        description={data?.attributes?.blockTop?.description}
        height={420}
        image={data?.attributes?.blockTop?.image?.data.attributes?.url}
        subTitle={data?.attributes?.blockTop?.subTitle}
        title={data?.attributes?.blockTop?.title}
        width={480}
      />
      <Info blocks={data?.attributes?.blocks} />
    </main>
  );
}
