import { Appointment, Block, Choose, OurServices, Slider } from '@/components';
import { LeaveForm } from '@/components/LeaveForm/LeaveForm';

export default function Page() {
  return (
    <main>
      <Appointment />
      <Block />
      <Slider title='What people say' />
      <Choose />
      <OurServices />
      <LeaveForm />
    </main>
  );
}
