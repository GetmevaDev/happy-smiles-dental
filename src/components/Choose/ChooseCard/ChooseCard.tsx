import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { ImageI, Images } from '@/types/image';

import styles from './ChooseCard.module.scss';

type ChooseCardProps = {
  title?: string;
  description?: string;
  image?: Images;
};

export const ChooseCard: FC<ChooseCardProps> = ({ title, description, image }) => (
  <div className={classNames(styles.choose_card)}>
    {image && <Image alt='users' height={100} src={image?.data?.attributes?.url} width={100} />}

    <div className={styles.text}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
);
