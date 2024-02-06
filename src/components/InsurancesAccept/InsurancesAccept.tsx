import classNames from 'classnames';
import React from 'react';

import { Typography } from '@/ui';

import styles from './InsurancesAccept.module.scss';

export const InsurancesAccept = () => (
  <div className={styles.section}>
    <Typography className={styles.title} tag='h2'>
      Insurances We Accept
    </Typography>

    <div className={styles.cards}>
      {Array.from({ length: 15 }, (_, index) => (
        <div className={classNames(styles.card, `${index % 2 === 0 ? styles.even : styles.odd}`)}>
          {index}
        </div>
      ))}
    </div>
  </div>
);
