import { Banner, Slider, Video } from '@/components';
import { LeaveReview } from '@/components/LeaveReview/LeaveReview';
import type { TestimonialsPageRoot } from '@/types/testimonials-page';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<TestimonialsPageRoot>('testimonials-page');

  return generateSeoMetaData(data);
}
export default async function Page() {
  const { data } = await fetchAPI<TestimonialsPageRoot>('testimonials-page');

  return (
    <main>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />
      <LeaveReview />
      <div className='padding'>
        <Slider cards={[]} title='Testimonials' />
      </div>
      <Video />
    </main>
  );
}
