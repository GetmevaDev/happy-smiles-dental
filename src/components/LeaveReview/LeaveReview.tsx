import type { FC } from 'react';
import React from 'react';

import type { Review as IReview } from '@/types/home-page';

import { Review } from '..';

import styles from './LeaveReview.module.scss';

export const LeaveReview: FC<{ review: IReview }> = ({ review }) => (
  <div className={styles.review}>
    <Review leaveForm review={review} />
  </div>
);
