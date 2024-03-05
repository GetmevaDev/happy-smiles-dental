import { Banner, Slider, Video } from '@/components';
import { LeaveReview } from '@/components/LeaveReview/LeaveReview';
import type { ReviewsRoot } from '@/types/reviews';
import type { TestimonialsPageRoot } from '@/types/testimonials-page';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<TestimonialsPageRoot>('testimonials-page');

  return generateSeoMetaData(data);
}
export default async function Page() {
  const { data } = await fetchAPI<TestimonialsPageRoot>('testimonials-page');
  const reviews = await fetchAPI<ReviewsRoot>('reviews');

  return (
    <div>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />
      <LeaveReview review={data?.attributes?.Review} />
      <div className='padding'>
        <Slider cards={reviews?.data} />
      </div>
      <Video url={data?.attributes?.videoUrl} />
    </div>
  );
}
