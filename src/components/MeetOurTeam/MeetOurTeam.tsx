import Image from 'next/image';
import React from 'react';

import { Typography } from '@/ui';

import styles from './MeetOurTeam.module.scss';

export const MeetOurTeam = () => (
  <div className={styles.meet}>
    <Typography className={styles.title} tag='h2'>
      Meet the Doctor
    </Typography>

    <div className={styles.card}>
      <div className={styles.card_inner}>
        <Image alt='doctor' className={styles.image} height={500} src='/dc-2.png' width={800} />

        <div className={styles.text}>
          <div className={styles.text_inner}>
            <h4 className={styles.doctor}>Dr. Diana Gerov, DDS</h4>
            <p className={styles.speciality}>Doctor of Dental Surgery</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
