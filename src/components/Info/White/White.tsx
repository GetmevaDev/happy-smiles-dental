import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { Image as ImageProps } from '@/types/about-us-page';
import { Typography } from '@/ui';

import styles from './White.module.scss';

interface WhiteProps {
  title: string;
  subTitle: string;
  description: string;
  image: {
    data: ImageProps;
  };
}

export const White: FC<WhiteProps> = ({ title, subTitle, description, image }) => (
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

    <div className={styles.right}>
      <Image
        alt={
          image?.data?.attributes?.alternativeText
            ? image?.data?.attributes?.alternativeText
            : 'white'
        }
        className={styles.image}
        height={image.data.attributes.height}
        src={image.data.attributes.url}
        width={image.data.attributes.width}
      />
    </div>
  </section>
);
