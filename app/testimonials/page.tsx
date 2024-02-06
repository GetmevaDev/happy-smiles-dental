import type { Metadata } from 'next';

import { Banner, Review, Slider, Video } from '@/components';
import { LeaveReview } from '@/components/LeaveReview/LeaveReview';

export const metadata: Metadata = {
  title: 'Testimonials'
};

export default function Page() {
  return (
    <main>
      <Banner subTitle='What People Say' title='Testimonials' />
      <LeaveReview />
      <div className='padding'>
        <Slider />
      </div>
      <Video />
    </main>
  );
}
