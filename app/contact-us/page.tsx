import { Banner } from '@/components';
import { WorkingHours } from '@/components/WorkingHours/WorkingHours';

export default function Page() {
  return (
    <main>
      <Banner subTitle='Get in touch' title='Contact Us' />

      <WorkingHours />
    </main>
  );
}
