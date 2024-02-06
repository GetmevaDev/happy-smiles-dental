import Image from 'next/image';
import React from 'react';

import { Button } from '@/ui/button/button';

import styles from './Appointment.module.scss';

export const Appointment = () => (
  <section className={styles.appointment}>
    <div className={styles.info}>
      <h1 className={styles.title}>Happy Smiles Dental In New Hyde Park</h1>

      <div className={styles.description}>
        General & Cosmetic Dentistry | 5 Star Patient Rating | Accepting New Patients | Dentist Near
        You
      </div>

      <div className={styles.make}>
        <Button>Make an appointment</Button>

        <div className={styles.phone}>
          <div className={styles.bg_phone}>
            <div className={styles.bg_phone_inner}>
              <Image alt='phone' height={24} src='/phone.svg' width={24} />
            </div>
          </div>

          <div className={styles.text}>
            <a className={styles.call} href='tel:516-354-7551'>
              Click to call
            </a>
            <div className={styles.number}>516-354-7551</div>
          </div>
        </div>
      </div>
    </div>

    <Image alt='tooth' height={502} src='/tooth.png' width={501} />
  </section>
);
