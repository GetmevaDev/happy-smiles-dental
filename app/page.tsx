import { Appointment, Block, Choose, OurServices, Slider } from "@/components";
import { LeaveFom } from "@/components/LeaveFom/LeaveFom";

export default function Page() {
  return (
    <main>
      <Appointment />
      <Block />
      <Slider />
      <Choose />
      <OurServices />
      <LeaveFom />
    </main>
  );
}
