import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@/ui';

import styles from './Banner.module.scss';

interface BannerProps {
  title?: string;
}

export const Banner: FC<BannerProps> = ({ title }) => (
  <section className={styles.section}>
    <div className={styles.image_inner}>
      <Image alt='banner' className={styles.image} height={400} src='/tech.png' width={1480} />
      <div className={styles.container}>
        <Typography className={styles.title} tag='h1'>
          {title}
        </Typography>
      </div>
    </div>
  </section>
);
