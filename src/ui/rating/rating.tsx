'use client';

import { Review } from '@/components/Review/Review';

import { Map } from '..';

import styles from './rating.module.scss';

export const Rating = () => (
  <div className={styles.rating_inner}>
    <Review />

    <div className={styles.map}>
      <Map />
    </div>
  </div>
);
