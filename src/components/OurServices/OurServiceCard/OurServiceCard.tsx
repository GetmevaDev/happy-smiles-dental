import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { ServiceSlug } from '@/types/home-page';

import styles from './OurServiceCard.module.scss';

export type MenuItem = {
  title?: string;
  slug: string;
};

export const OurServiceCard: FC<MenuItem> = ({ title, slug }) => (
  <li className={styles.card}>
    <div className={styles.first} />
    <div className={styles.second} />
    <div className={styles.text}>
      <Link className={styles.link} href={slug || '/'}>
        {title}
      </Link>
    </div>
    <Image alt='arrow' height={30} src='/arrow.svg' width={30} />
  </li>
);
