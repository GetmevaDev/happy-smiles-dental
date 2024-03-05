'use client';

import dynamic from 'next/dynamic';
import type { FC } from 'react';

import { Review } from '@/components/Review/Review';
import type { Review as IReview } from '@/types/home-page';

import styles from './rating.module.scss';

const Map = dynamic(() => import('../map/map'), {
  loading: () => <p>Loading...</p>
});

export const Rating: FC<{ review: IReview }> = ({ review }) => (
  <div className={styles.rating_inner}>
    <Review review={review} />

    <div className={styles.map}>
      <Map />
    </div>
  </div>
);
