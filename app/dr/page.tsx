import { Banner, Brightness } from '@/components';

export default function Page() {
  return (
    <main>
      <Banner button subTitle='Doctor of Dental Surgery' title='Dr. Diana Gerov, DDS' />
      <Brightness
        background
        description='I started on my path in dentistry with the intent to change the field by building a dialogue with patients, a portion of the profession I felt was being drastically neglected. I believe in treatment transparency and take extra time with patients to explain treatment necessity, through clinical studies and intra-oral photography.
Dr. Diana Gerov practices the full scope of general and cosmetic dentistry. Her expertise ranges from fitting patients with expertly-crafted bridges, crowns, and veneers to ensuring the comfort of patients of all ages for standard procedures such as root canal, fillings, etc. Dr. Gerov is a proponent for the continuing pursuit of education and advances in technology, and thus the staff of Happy Smiles Dental are all seasoned on the latest techniques, and the office is prepared with the finest in technology.'
        height={497}
        image='/dr.png'
        title='A Beautiful Smile is a Happy Smile.'
        width={290}
      />
    </main>
  );
}
