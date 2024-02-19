import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { ReviewsData } from '@/types/reviews';

import styles from './SliderCard.module.scss';

export const SliderCard: FC<ReviewsData> = ({ attributes }) => (
  <div className={styles.card}>
    <div className={styles.top}>
      <div className={styles.label}>{attributes?.title}</div>
      <div className={styles.content}>{attributes?.description}</div>
    </div>

    <div className={styles.rating}>
      <div className={styles.stars}>
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
      </div>

      <div>
        {attributes?.yelpLink && <Image alt='yelp' height={36} src='/yelp.png' width={88} />}
        {attributes?.googleLink && <Image alt='google' height={23} src='/google.png' width={73} />}
      </div>
    </div>
  </div>
);
