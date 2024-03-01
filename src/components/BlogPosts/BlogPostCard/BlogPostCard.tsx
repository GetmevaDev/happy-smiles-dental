import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { RootPostsPageAttributes } from '@/types/posts';
import { truncateText } from '@/utils/lib/truncateText';

import styles from './BlogPostCard.module.scss';

export const BlogPostCard: FC<{ post: RootPostsPageAttributes }> = ({ post }) => (
  <Link href={`/blog/${post?.slug}`}>
    <div className={styles.card}>
      <div className={styles.title}>{post?.title}</div>
      <div className={styles.description}>{truncateText(post?.content, 100)}</div>

      <div className={styles.bottom}>
        <button className={styles.read}>
          <div className={styles.link}>
            Read more
            <span>
              <Image alt='chevron' height={10} src='/chevron.svg' width={10} />
            </span>
          </div>
        </button>
      </div>
    </div>
  </Link>
);
