import type { FC } from 'react';
import React from 'react';

import type { RootPostsPageData } from '@/types/posts';
import { Typography } from '@/ui';

import { BlogPostCard } from './BlogPostCard/BlogPostCard';
import styles from './BlogPosts.module.scss';

export const BlogPosts: FC<{ posts: RootPostsPageData[] }> = ({ posts }) => (
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
    </div>
  </section>
);
