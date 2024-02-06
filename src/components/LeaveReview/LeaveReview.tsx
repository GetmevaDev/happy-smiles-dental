import React from 'react';

import { Review } from '..';

import styles from './LeaveReview.module.scss';

export const LeaveReview = () => (
  <div className={styles.review}>
    <Review leaveForm />
  </div>
);
