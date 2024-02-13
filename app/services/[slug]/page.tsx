import { Banner } from '@/components';
import { Faq } from '@/components/Faq/Faq';
import { ServiceBlock } from '@/components/ServiceBlock/ServiceBlock';
import type { DataService, RootServicePage, ServiceCategory } from '@/types/service-page';
import { fetchAPI } from '@/utils/api/fetchApi';

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchAPI<RootServicePage>(`services/find-by-slug/${params.slug}`);

  const services = await fetchAPI<{ data: DataService[] }>(`services`);
  const categories = await fetchAPI<{ data: ServiceCategory[] }>(`service-categories`);

  return (
    <main>
      <Banner
        image={data?.attributes?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.description}
        title={data?.attributes?.title}
      />

      <ServiceBlock
        categories={categories?.data}
        content={data?.attributes?.content}
        services={services?.data}
      />
      <Faq />
    </main>
  );
}
