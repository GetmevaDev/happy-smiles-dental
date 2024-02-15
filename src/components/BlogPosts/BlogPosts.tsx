import React from 'react';

import { Typography } from '@/ui';

import { BlogPostCard } from './BlogPostCard/BlogPostCard';
import styles from './BlogPosts.module.scss';

export const BlogPosts = () => (
  <section className={styles.section}>
    <div className={styles.blog_posts}>
      <Typography className={styles.title} tag='h2'>
        Recent Posts
      </Typography>

      <div className={styles.cards}>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  </section>
);
