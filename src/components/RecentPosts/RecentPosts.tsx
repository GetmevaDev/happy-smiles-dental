'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import type { RootPostsPage, RootPostsPageData } from '@/types/posts';
import { fetchAPI } from '@/utils/api/fetchApi';

import styles from './RecentPosts.module.scss';

export const RecentPosts = () => {
  const [posts, setPosts] = useState<RootPostsPageData[]>([]);

  useEffect(() => {
    fetchAPI<RootPostsPage>(`posts?sort[0]=createdAt:desc&pagination[limit]=5`, false).then(
      (posts) => {
        setPosts(posts.data);
      }
    );
  }, []);

  return (
    <div className={styles.recent}>
      <h5 className={styles.title}>Recent Posts</h5>

      <div className={styles.cards}>
        {posts.map((post) => (
          <div className={styles.card}>
            <div className={styles.card_title}>
              <Link href={`/blog/${post.attributes.slug}`}>{post.attributes.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
