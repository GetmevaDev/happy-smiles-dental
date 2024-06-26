import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@/ui';

import styles from './MeetOurTeam.module.scss';

interface MeetOurTeamProps {
  title: string;
  doctorSpeciality: string;
  name: string;
  image: string;
  alternativeText: string;
}

export const MeetOurTeam: FC<MeetOurTeamProps> = ({
  title,
  name,
  doctorSpeciality,
  image,
  alternativeText
}) => (
  <div className={styles.meet}>
    <Typography className={styles.title} tag='h2'>
      {title}
    </Typography>

    <div className={styles.card}>
      <div className={styles.card_inner}>
        <Image
          alt={alternativeText}
          className={styles.image}
          height={500}
          src={image}
          width={800}
        />

        <Link className={styles.doctor} href='/doctor-of-dental-surgery'>
          <div className={styles.text}>
            <div className={styles.text_inner}>
              <h4 className={styles.doctor}>{name}</h4>
              <p className={styles.speciality}>{doctorSpeciality}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);
