import type { Metadata, ResolvingMetadata } from 'next';

import { Banner } from '@/components';
import { Post } from '@/components/Post/Post';
import type { PostPageRoot } from '@/types/post';
import type { RootPostsPage } from '@/types/posts';
import { fetchAPI } from '@/utils/api/fetchApi';
import { generateSeoMetaData } from '@/utils/lib/generateMetaData';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data } = await fetchAPI<PostPageRoot>(`posts/find-by-slug/${params.slug}`);

  return generateSeoMetaData(data);
}

export async function generateStaticParams() {
  const { data } = await fetchAPI<RootPostsPage>(`posts`);

  return data?.map((post) => ({
    slug: post?.attributes?.slug
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data } = await fetchAPI<PostPageRoot>(`posts/find-by-slug/${slug}`);

  return (
    <div>
      <Banner
        buttonBack
        image={data?.attributes?.bgImage?.data?.attributes?.url}
        title={data?.attributes?.title}
      />

      <Post content={data?.attributes?.content} createdAt={data?.attributes?.createdAt} />
    </div>
  );
}
