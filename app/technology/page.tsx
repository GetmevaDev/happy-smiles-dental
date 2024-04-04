import type { Metadata } from 'next';

import { Banner, Brightness, Info } from '@/components';
import type { RootTechnologyPage } from '@/types/technology-page';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<RootTechnologyPage>('technology-page');

  return generateSeoMetaData(data, 'technology');
}
export default async function Page() {
  const { data } = await fetchAPI<RootTechnologyPage>('technology-page');

  return (
    <div>
      <Banner
        alternativeText={data?.attributes?.banner?.bgImage?.data?.attributes?.alternativeText}
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        title={data?.attributes?.banner?.title}
      />
      <Brightness
        alternativeText={data?.attributes?.blockTop?.image?.data?.attributes?.alternativeText}
        description={data?.attributes?.blockTop?.description}
        height={420}
        image={data?.attributes?.blockTop?.image?.data.attributes?.url}
        subTitle={data?.attributes?.blockTop?.subTitle}
        title={data?.attributes?.blockTop?.title}
        width={480}
      />
      <Info blocks={data?.attributes?.blocks} />
    </div>
  );
}
