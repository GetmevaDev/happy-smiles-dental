import { Banner, InsurancesAccept, SmileClub } from '@/components';
import type { AcceptedInsuranceRoot } from '@/types/accepted-insurances';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<AcceptedInsuranceRoot>('accepted-insurances-page');

  return generateSeoMetaData(data, 'accepted-insurances');
}

export default async function Page() {
  const { data } = await fetchAPI<AcceptedInsuranceRoot>('accepted-insurances-page');

  return (
    <div>
      <Banner
        alternativeText={data?.attributes?.banner?.bgImage?.data?.attributes?.alternativeText}
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />
      <InsurancesAccept
        cards={data?.attributes?.insurances?.InsuranceCard}
        title={data?.attributes?.insurances?.title}
      />
      <SmileClub
        include={data?.attributes?.SmileClub?.include}
        includesTitle={data?.attributes?.SmileClub?.includes_title}
        note={data?.attributes?.SmileClub?.note}
        price={data?.attributes?.SmileClub?.price}
        priceTitle={data?.attributes?.SmileClub?.priceTitle}
        subTitle={data?.attributes?.SmileClub?.subTitle}
        title={data?.attributes?.SmileClub?.title}
      />
    </div>
  );
}
