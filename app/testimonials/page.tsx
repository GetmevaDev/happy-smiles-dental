import type { Metadata } from 'next';

import { Banner, Review, Slider, Video } from '@/components';
import { LeaveReview } from '@/components/LeaveReview/LeaveReview';
import type { TestimonialsPageRoot } from '@/types/testimonials-page';
import { fetchAPI } from '@/utils/api/fetchApi';

export const metadata: Metadata = {
  title: 'Testimonials'
};

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
