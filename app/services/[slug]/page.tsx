import type { Metadata } from 'next';

import { Banner } from '@/components';
import { Faq } from '@/components/Faq/Faq';
import { Accordion } from '@/ui';
import { fetchAPI } from '@/utils/api/fetchApi';

export default function Page() {
  // const { data } = await fetchAPI<any>('home-page');

  return (
    <main>
      <Banner subTitle='Our Services' title='Home Care Instructions' />
      <Faq />
    </main>
  );
}
