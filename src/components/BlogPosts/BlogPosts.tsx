'use client';

import type { FC } from 'react';
import React from 'react';

import type { Meta, RootPostsPageData } from '@/types/posts';
import { Typography } from '@/ui';
import { Pagination } from '@/ui/pagination/pagination';

import { BlogPostCard } from './BlogPostCard/BlogPostCard';
import styles from './BlogPosts.module.scss';

export const BlogPosts: FC<{ posts: RootPostsPageData[]; meta: Meta }> = ({ posts, meta }) => {
  const totalPages = Math.ceil((meta?.pagination.total ?? 0) / (meta?.pagination?.pageSize ?? 1));

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

        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
};
