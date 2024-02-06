import { Appointment, Block, Choose, OurServices, Slider } from '@/components';
import { LeaveFom } from '@/components/LeaveFom/LeaveFom';

export default function Page() {
  return (
    <main>
      <Appointment />
      <Block />
      <Slider title='What people say' />
      <Choose />
      <OurServices />
      <LeaveFom />
    </main>
  );
}
