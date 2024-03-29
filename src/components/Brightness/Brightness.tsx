import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@/ui';

import styles from './Brightness.module.scss';

interface BrightnessProps {
  title?: string;
  subTitle?: string;
  description?: string;
  image?: string;
  width?: number;
  background?: boolean;
  height?: number;
  alternativeText?: string;
}

export const Brightness: FC<BrightnessProps> = ({
  title,
  subTitle,
  description,
  image,
  width,
  background,
  alternativeText,
  height
}) => (
  <section className={styles.section}>
    <div className={styles.left}>
      <Typography className={styles.title} size='medium' tag='h3'>
        {title}
      </Typography>
      <Typography className={styles.mini_title} size='small' tag='h4'>
        {subTitle}
      </Typography>

      <div className={styles.description}>{description}</div>
    </div>

    <div className={background ? styles.background_right : styles.right}>
      {image && (
        <div className={styles.image_inner}>
          <Image
            alt={alternativeText || 'tooth'}
            className={styles.image}
            height={height}
            src={image}
            width={width}
          />
          {/* <div className={styles.circle} /> */}
        </div>
      )}
    </div>
  </section>
);
