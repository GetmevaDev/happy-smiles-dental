import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import styles from './OurServiceCard.module.scss';

export type MenuItem = {
  title?: string;
};

export const OurServiceCard: FC<MenuItem> = ({ title }) => (
  <div className={styles.card}>
    <div className={styles.first} />
    <div className={styles.second} />
    <div className={styles.text}>{title}</div>
    <Image alt='arrow' height={30} src='/arrow.svg' width={30} />
  </div>
);
