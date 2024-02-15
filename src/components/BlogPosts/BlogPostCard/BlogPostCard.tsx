import Image from 'next/image';
import React from 'react';

import styles from './BlogPostCard.module.scss';

export const BlogPostCard = () => (
  <div className={styles.card}>
    <div className={styles.title}>Maximize Your Dental Benefits Before the Year Ends</div>
    <div className={styles.description}>
      As the year draws to a close, it`s not just the holiday season that should be on your mind –
      it`s also an ideal time to take a closer look at your dental insurance benefits. Most dental
      insurance plan...
    </div>

    <div className={styles.bottom}>
      <div className={styles.date}>6 December 2023</div>
      <button className={styles.read}>
        Read more
        <span>
          <Image alt='chevron' height={10} src='/chevron.svg' width={10} />
        </span>
      </button>
    </div>
  </div>
);
