import type { Metadata } from 'next';

import { Banner } from '@/components';
import { Post } from '@/components/Post/Post';
import type { PostPageRoot } from '@/types/post';
import { fetchAPI } from '@/utils/api/fetchApi';

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchAPI<PostPageRoot>(`posts/find-by-slug/${params.slug}`);

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
