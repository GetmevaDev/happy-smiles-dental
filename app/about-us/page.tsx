import { Banner, Brightness } from '@/components';
import { Awards } from '@/components/Awards/Awards';
import { ClinicGallery } from '@/components/ClinicGallery/ClinicGallery';
import { LeaveForm } from '@/components/LeaveForm/LeaveForm';
import { MeetOurTeam } from '@/components/MeetOurTeam/MeetOurTeam';
import type { RootAboutUsPage } from '@/types/about-us-page';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<RootAboutUsPage>('about-us-page');

  return generateSeoMetaData(data);
}

export default async function Page() {
  const { data } = await fetchAPI<RootAboutUsPage>('about-us-page');

  return (
    <div>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />

      <Brightness
        background
        description={data?.attributes?.block?.description}
        height={497}
        image='/dr.png'
        title={data?.attributes?.block?.title}
        width={290}
      />

      <Awards
        cards={data?.attributes?.ClinicAwards?.ClinicAward}
        title={data?.attributes?.ClinicAwards.title}
      />

      <MeetOurTeam
        doctorSpeciality={data?.attributes?.MeetTheDoctor?.doctorSpeciality}
        name={data?.attributes?.MeetTheDoctor?.name}
        title={data?.attributes?.MeetTheDoctor?.title}
      />

      <ClinicGallery images={data?.attributes?.ClinicGallery?.images.data} />

      <LeaveForm review={data?.attributes?.Review} />
    </div>
  );
}
