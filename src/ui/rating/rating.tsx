'use client';

import dynamic from 'next/dynamic';

import { Review } from '@/components/Review/Review';

import styles from './rating.module.scss';

const Map = dynamic(() => import('../map/map'), {
  loading: () => <p>Loading...</p>
});

export const Rating = () => (
  <div className={styles.rating_inner}>
    <Review />

    <div className={styles.map}>
      <Map />
    </div>
  </div>
);
