import { Banner } from '@/components';
import { BlogPosts } from '@/components/BlogPosts/BlogPosts';
import type { RootBlogPage } from '@/types/blog-page';
import type { RootHomePageI } from '@/types/home-page';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata() {
  const { data } = await fetchAPI<RootHomePageI>('home-page');

  return generateSeoMetaData(data);
}

export default async function Page() {
  const { data } = await fetchAPI<RootBlogPage>('blog-page');

  return (
    <main>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />

      <BlogPosts posts={data?.attributes?.posts.data} />
    </main>
  );
}
