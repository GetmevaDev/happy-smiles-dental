import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { WorkingHour } from '@/types/contact-us-page';
import { Typography } from '@/ui';

import styles from './WorkingHours.module.scss';

const Map = dynamic(() => import('../../ui/map/map'), {
  loading: () => <p>Loading...</p>
});

export const WorkingHours: FC<{ title: string; address: string; hours: WorkingHour[] }> = ({
  title,
  address,
  hours
}) => (
  <div className={styles.section}>
    <div className={styles.left}>
      <Typography tag='h2'>{title}</Typography>

      <div className={styles.hours}>
        <ul className={styles.hours_inner}>
          {hours?.map((hour) => (
            <li key={hour.id} className={styles.hour}>
              <span className={styles.day}>{hour.day}:</span>
              <span className={styles.time}>{hour.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.location}>
        <Image alt='location' height={48} src='/location.svg' width={38} />

        <div className={styles.address}>{address}</div>
      </div>
    </div>

    <div className={styles.right}>
      <Map />
    </div>
  </div>
);
