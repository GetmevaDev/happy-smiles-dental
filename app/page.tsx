import { Appointment, Block, Choose, OurServices, Slider } from '@/components';
import { LeaveForm } from '@/components/LeaveForm/LeaveForm';
import type { HomePageI, RootHomePageI } from '@/types/home-page';
import { fetchAPI } from '@/utils/api/fetchApi';

export default async function Page() {
  const { data } = await fetchAPI<RootHomePageI>('home-page');

  console.log(data, 'data');

  return (
    <main>
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
      <Slider title='What people say' />
      <Choose />
      <OurServices />
      <LeaveForm />
    </main>
  );
}
