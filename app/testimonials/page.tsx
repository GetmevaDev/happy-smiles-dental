import type { Metadata } from 'next';

import { Banner, Review } from '@/components';
import { LeaveReview } from '@/components/LeaveReview/LeaveReview';

export const metadata: Metadata = {
  title: 'Testimonials'
};

export default function Page() {
  return (
    <main>
      <Banner subTitle='What People Say' title='Testimonials' />
      <LeaveReview />
    </main>
  );
}
