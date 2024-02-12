import { Banner, Brightness } from '@/components';
import { Awards } from '@/components/Awards/Awards';
import { ClinicGallery } from '@/components/ClinicGallery/ClinicGallery';
import { LeaveForm } from '@/components/LeaveForm/LeaveForm';
import { MeetOurTeam } from '@/components/MeetOurTeam/MeetOurTeam';

export default function Page() {
  return (
    <main>
      <Banner
        subTitle='Creating & Maintaining Happy Smiles in New Hyde Park'
        title='Taking Care of Your Happy Smile'
      />

      <Brightness
        background
        description='I started on my path in dentistry with the intent to change the field by building a dialogue with patients, a portion of the profession I felt was being drastically neglected. I believe in treatment transparency and take extra time with patients to explain treatment necessity, through clinical studies and intra-oral photography.
Dr. Diana Gerov practices the full scope of general and cosmetic dentistry. Her expertise ranges from fitting patients with expertly-crafted bridges, crowns, and veneers to ensuring the comfort of patients of all ages for standard procedures such as root canal, fillings, etc. Dr. Gerov is a proponent for the continuing pursuit of education and advances in technology, and thus the staff of Happy Smiles Dental are all seasoned on the latest techniques, and the office is prepared with the finest in technology.'
        height={497}
        image='/dr.png'
        title='A Beautiful Smile is a Happy Smile.'
        width={290}
      />

      <Awards />

      <MeetOurTeam />

      <ClinicGallery />

      <LeaveForm />
    </main>
  );
}
