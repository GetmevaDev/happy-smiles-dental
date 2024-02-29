'use client';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import type { Meta, RootPostsPage, RootPostsPageData } from '@/types/posts';
import { Typography } from '@/ui';
import { Pagination } from '@/ui/pagination/pagination';
import { fetchAPI } from '@/utils/api/fetchApi';

import { BlogPostCard } from './BlogPostCard/BlogPostCard';
import styles from './BlogPosts.module.scss';

export const BlogPosts: FC<{ posts: RootPostsPageData[]; meta: Meta }> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<RootPostsPageData[]>([]);
  const [meta, setMeta] = useState<Meta>();
  const totalPages = Math.ceil((meta?.pagination.total ?? 0) / (meta?.pagination?.pageSize ?? 1));

  useEffect(() => {
    fetchAPI<RootPostsPage>(
      `posts?pagination[page]=${currentPage}&pagination[pageSize]=6`,
      false
    ).then((posts) => {
      setPosts(posts.data);
      setMeta(posts.meta);
    });
  }, [currentPage]);

  return (
    <section className={styles.section}>
      <div className={styles.blog_posts}>
        <Typography className={styles.title} tag='h2'>
          Recent Posts
        </Typography>

        <div className={styles.cards}>
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post.attributes} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            onPageChange={(page: number) => setCurrentPage(page)}
            totalPages={totalPages}
          />
        )}
      </div>
    </section>
  );
};
