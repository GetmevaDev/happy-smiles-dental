import type { Metadata } from 'next';

import { Banner, Brightness } from '@/components';

export const metadata: Metadata = {
  title: 'Technology'
};

export default function Page() {
  return (
    <main>
      <Banner title='Technology' />
      <Brightness />
    </main>
  );
}
