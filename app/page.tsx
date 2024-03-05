import { Appointment, Block, Choose, OurServices, Slider } from '@/components';
import { LeaveForm } from '@/components/LeaveForm/LeaveForm';
import type { RootHomePageI } from '@/types/home-page';
import type { ReviewsRoot } from '@/types/reviews';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<RootHomePageI>('home-page');

  return generateSeoMetaData(data);
}

export default async function Page() {
  const { data } = await fetchAPI<RootHomePageI>('home-page');
  const reviews = await fetchAPI<ReviewsRoot>('reviews');
  return (
    <div>
      <Appointment
        description={data?.attributes?.Block?.description}
        image={data?.attributes?.Block?.image?.data?.attributes?.url}
        phone={data?.attributes?.Block?.phone}
        title={data?.attributes?.Block?.title}
      />
      <Block
        description={data?.attributes?.Banner?.description}
        image={data?.attributes?.Banner?.image?.data?.attributes?.url}
        title={data?.attributes?.Banner?.title}
      />
      <Slider cards={reviews?.data} title='What people say' />
      <Choose
        cards={data?.attributes?.ChooseBlock?.ChooseBlockCard}
        description={data?.attributes?.ChooseBlock?.description}
        title={data?.attributes?.ChooseBlock?.title}
      />
      <OurServices services={data?.attributes?.OurServices?.services?.data} title='Our services' />
      <LeaveForm review={data?.attributes?.Review} />
    </div>
  );
}
