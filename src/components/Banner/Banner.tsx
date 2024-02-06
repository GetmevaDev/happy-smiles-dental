import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@/ui';
import { Button } from '@/ui/button/button';

import styles from './Banner.module.scss';

interface BannerProps {
  title?: string;
  subTitle?: string;
  button?: boolean;
}

export const Banner: FC<BannerProps> = ({ title, subTitle, button }) => (
  <section className={styles.section}>
    <div className={styles.image_inner}>
      <Image alt='banner' className={styles.image} height={400} src='/tech.png' width={1480} />
      <div className={styles.container}>
        <div className={styles.titles}>
          <Typography size='mini' tag='h4'>
            {subTitle}
          </Typography>

          <Typography tag='h1'>{title}</Typography>

          {button && <Button className={styles.btn}>Make an appointment</Button>}
        </div>
      </div>
    </div>
  </section>
);
