import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { Image as ImageProps } from '@/types/about-us-page';
import { Typography } from '@/ui';
import { Button } from '@/ui/button/button';

import styles from './Gray.module.scss';

interface GrayProps {
  button?: boolean;
  title: string;
  subTitle: string;
  description: string;
  image: {
    data: ImageProps;
  };
}

export const Gray: FC<GrayProps> = ({ button, title, subTitle, image, description }) => (
  <section className={styles.section}>
    <div className={styles.block}>
      <div className={styles.left}>
        <Image
          alt={
            image?.data?.attributes?.alternativeText
              ? image?.data?.attributes?.alternativeText
              : 'gray'
          }
          className={styles.image}
          height={image.data.attributes.height}
          src={image.data.attributes.url}
          width={image.data.attributes.width}
        />
      </div>

      <div className={styles.right}>
        <Typography className={styles.title} size='medium' tag='h3'>
          {title}
        </Typography>
        <Typography className={styles.mini_title} size='small' tag='h4'>
          {subTitle}
        </Typography>

        <div className={styles.description}>{description}</div>

        {button && <Button className={styles.btn}>Learn more</Button>}
      </div>
    </div>
  </section>
);
