import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@/ui';

import styles from './MeetOurTeam.module.scss';

export const MeetOurTeam: FC<{ title: string; doctorSpeciality: string; name: string }> = ({
  title,
  name,
  doctorSpeciality
}) => (
  <div className={styles.meet}>
    <Typography className={styles.title} tag='h2'>
      {title}
    </Typography>

    <div className={styles.card}>
      <div className={styles.card_inner}>
        <Image alt='doctor' className={styles.image} height={500} src='/dc-2.png' width={800} />

        <div className={styles.text}>
          <div className={styles.text_inner}>
            <h4 className={styles.doctor}>
              <Link className={styles.doctor} href='/doctor-of-dental-surgery'>
                {name}
              </Link>
            </h4>
            <p className={styles.speciality}>{doctorSpeciality}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
