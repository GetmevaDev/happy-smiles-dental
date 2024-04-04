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

  return generateSeoMetaData(data, 'about-us');
}

export default async function Page() {
  const { data } = await fetchAPI<RootAboutUsPage>('about-us-page');

  return (
    <div>
      <Banner
        alternativeText={data?.attributes?.banner?.bgImage?.data?.attributes?.alternativeText}
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />

      <Brightness
        background
        description={data?.attributes?.block?.description}
        height={data?.attributes?.block?.image?.data?.attributes?.height}
        image={data?.attributes?.block?.image?.data?.attributes?.url}
        title={data?.attributes?.block?.title}
        width={data?.attributes?.block?.image?.data?.attributes?.width}
      />

      <Awards
        cards={data?.attributes?.ClinicAwards?.ClinicAward}
        title={data?.attributes?.ClinicAwards.title}
      />

      <MeetOurTeam
        alternativeText={data?.attributes?.MeetTheDoctor?.image?.data?.attributes?.alternativeText}
        doctorSpeciality={data?.attributes?.MeetTheDoctor?.doctorSpeciality}
        image={data?.attributes?.MeetTheDoctor?.image?.data?.attributes?.url}
        name={data?.attributes?.MeetTheDoctor?.name}
        title={data?.attributes?.MeetTheDoctor?.title}
      />

      <ClinicGallery images={data?.attributes?.ClinicGallery?.images?.data} />

      <LeaveForm review={data?.attributes?.Review} />
    </div>
  );
}
