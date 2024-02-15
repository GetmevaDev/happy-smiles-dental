import Link from 'next/link';
import React from 'react';

import styles from './RecentPosts.module.scss';

export const RecentPosts = () => (
  <div className={styles.recent}>
    <h5 className={styles.title}>Recent Posts</h5>

    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.card_title}>
          <Link href={`/blog${``}`}>Aetna Dentist in New Hyde Park / Lake Success</Link>
        </div>
        <div className={styles.date}>6 December 2023</div>
      </div>
    </div>
  </div>
);
