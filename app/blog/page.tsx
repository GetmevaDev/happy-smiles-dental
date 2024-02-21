import { Banner } from '@/components';
import { BlogPosts } from '@/components/BlogPosts/BlogPosts';
import type { RootBlogPage } from '@/types/blog-page';
import type { RootHomePageI } from '@/types/home-page';
import type { RootPostsPage } from '@/types/posts';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export const dynamic = 'force-static';

export async function generateMetadata() {
  const { data } = await fetchAPI<RootHomePageI>('blog-page');

  return generateSeoMetaData(data);
}

export async function generateStaticParams() {
  const posts = await fetchAPI<RootPostsPage>(`posts`, false);

  return posts?.data?.map((post) => ({
    slug: post?.attributes?.slug
  }));
}

export default async function Page({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const { data } = await fetchAPI<RootBlogPage>(`blog-page`);
  const posts = await fetchAPI<RootPostsPage>(
    `posts?pagination[page]=${currentPage}&pagination[pageSize]=6`,
    false
  );

  return (
    <div>
      <Banner
        image={data?.attributes?.banner?.bgImage?.data?.attributes?.url}
        subTitle={data?.attributes?.banner?.subTitle}
        title={data?.attributes?.banner?.title}
      />

      <BlogPosts meta={posts?.meta} posts={posts?.data} />
    </div>
  );
}
