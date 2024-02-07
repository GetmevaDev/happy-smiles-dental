import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { SliderCardI } from '@/types/home-page';

import styles from './SliderCard.module.scss';

export const SliderCard: FC<SliderCardI> = ({ title, description }) => (
  <div className={styles.card}>
    <div className={styles.top}>
      <div className={styles.label}>{title}</div>
      <div className={styles.content}>{description}</div>
    </div>

    <div className={styles.rating}>
      <div className={styles.stars}>
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
        <Image alt='star' height={18} src='/star.svg' width={18} />
      </div>

      <div>
        <Image alt='yelp' height={36} src='/yelp.png' width={88} />
      </div>
    </div>
  </div>
);
