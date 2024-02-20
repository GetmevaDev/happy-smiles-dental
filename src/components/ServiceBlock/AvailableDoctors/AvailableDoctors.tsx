import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Typography } from '@/ui';
import { Button } from '@/ui/button/button';

import styles from './AvailableDoctor.module.scss';

export const AvailableDoctors = () => (
  <div className={styles.doctor}>
    <Typography className={styles.title} size='small' tag='h4'>
      Available Doctors
    </Typography>

    <div className={styles.card}>
      <div className={styles.left}>
        <Image alt='doctor' className={styles.image} height={110} src='/circle.png' width={110} />

        <div>
          <div className={styles.name}>Dr. Diana Gerov, DDS</div>
          <div className={styles.speciality}>Doctor of Dental Surgery</div>
        </div>
      </div>
      <Link href='/doctor-of-dental-surgery'>
        <Image
          alt='doctor'
          className={styles.image}
          height={14}
          src='/chevron-right.svg'
          width={23}
        />
      </Link>
    </div>
    <Link href='https://app.nexhealth.com/appt/happy-smiles-dental'>
      <Button>Make an appointment</Button>
    </Link>
  </div>
);
