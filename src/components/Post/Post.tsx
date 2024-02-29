import MarkdownIt from 'markdown-it';
import type { FC } from 'react';
import React from 'react';

import { RecentPosts } from '../RecentPosts/RecentPosts';

import styles from './Post.module.scss';

export const Post: FC<{ content: string }> = ({ content }) => {
  const md = new MarkdownIt({
    html: true
  });

  const htmlContent = content ? md.render(content) : '';

  return (
    <div className={styles.post}>
      <div className={styles.left}>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>

      <div className={styles.right}>
        <RecentPosts />
      </div>
    </div>
  );
};
