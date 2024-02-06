import Image from 'next/image';
import React from 'react';

import { Typography } from '@/ui';

import styles from './Gray.module.scss';

export const Gray = () => (
  <section className={styles.section}>
    <div className={styles.block}>
      <div className={styles.left}>
        <Image alt='1' height={422} src='/1.png' width={422} />
      </div>

      <div className={styles.right}>
        <Typography className={styles.title} size='medium' tag='h3'>
          Pictures Speak Louder than Words
        </Typography>
        <Typography className={styles.mini_title} size='small' tag='h4'>
          Intra- Oral Camera`s
        </Typography>

        <div className={styles.description}>
          At Happy Smiles Dental, we offer the Zoom! system of chairside teeth whitening, a proven
          safe and effective method for immediate change. In only a little over an hour, Dr. Gerov
          can whiten your teeth by up to 8 shades lighter. With Zoom!, a whitening gel is applied to
          the teeth, and then a specially-designed light is applied to them, which activates the gel
          and gently breaks down tough stains while effectively whitening.
        </div>
      </div>
    </div>
  </section>
);
