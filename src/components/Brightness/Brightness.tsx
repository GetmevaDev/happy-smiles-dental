import Image from 'next/image';
import React from 'react';

import { Typography } from '@/ui';

import styles from './Brightness.module.scss';

export const Brightness = () => (
  <section className={styles.section}>
    <div className={styles.left}>
      <Typography className={styles.title} size='medium' tag='h3'>
        Unleash Your Brightness
      </Typography>
      <Typography className={styles.mini_title} size='small' tag='h4'>
        Philips Zoom WhiteSpeed
      </Typography>

      <div className={styles.description}>
        At Happy Smiles Dental, we offer the Zoom! system of chairside teeth whitening, a proven
        safe and effective method for immediate change. In only a little over an hour, Dr. Gerov can
        whiten your teeth by up to 8 shades lighter. With Zoom!, a whitening gel is applied to the
        teeth, and then a specially-designed light is applied to them, which activates the gel and
        gently breaks down tough stains while effectively whitening.
      </div>
    </div>

    <div className={styles.right}>
      <Image alt='tooth' height={420} src='/bright.jpg' width={480} />
    </div>
  </section>
);
