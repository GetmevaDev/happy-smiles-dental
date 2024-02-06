import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

import { Typography } from '@/ui';

import styles from './WorkingHours.module.scss';

const Map = dynamic(() => import('../../ui/map/map'), {
  loading: () => <p>Loading...</p>
});

export const WorkingHours = () => (
  <div className={styles.section}>
    <div className={styles.left}>
      <Typography tag='h2'>Working hours</Typography>

      <div className={styles.hours}>
        <ul className={styles.hours_inner}>
          <li className={styles.hour}>
            <span className={styles.day}>Monday:</span>
            <span className={styles.time}>9:00AM - 6:00 PM</span>
          </li>

          <li className={styles.hour}>
            <span className={styles.day}>Monday:</span>
            <span className={styles.time}>9:00AM - 6:00 PM</span>
          </li>

          <li className={styles.hour}>
            <span className={styles.day}>Monday:</span>
            <span className={styles.time}>9:00AM - 6:00 PM</span>
          </li>

          <li className={styles.hour}>
            <span className={styles.day}>Monday:</span>
            <span className={styles.time}>9:00AM - 6:00 PM</span>
          </li>

          <li className={styles.hour}>
            <span className={styles.day}>Monday:</span>
            <span className={styles.time}>9:00AM - 6:00 PM</span>
          </li>

          <li className={styles.hour}>
            <span className={styles.day}>Monday:</span>
            <span className={styles.time}>9:00AM - 6:00 PM</span>
          </li>

          <li className={styles.hour}>
            <span className={styles.day}>Monday:</span>
            <span className={styles.time}>9:00AM - 6:00 PM</span>
          </li>
        </ul>
      </div>

      <div className={styles.location}>
        <Image alt='location' height={48} src='/location.svg' width={38} />

        <div className={styles.address}>
          1300 Union Turnpike, Suite 106, <br /> New Hyde Park 11040
        </div>
      </div>
    </div>

    <div className={styles.right}>
      <Map />
    </div>
  </div>
);
