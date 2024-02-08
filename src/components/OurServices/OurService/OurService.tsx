import classNames from 'classnames';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { Service } from '@/types/home-page';

import type { MenuItem } from '../OurServiceCard/OurServiceCard';
import { OurServiceCard } from '../OurServiceCard/OurServiceCard';

import styles from './OurService.module.scss';

interface OurServiceProps {
  name: string;
  menu: Service[];
  grid?: 'column' | 'row';
}

export const OurService: FC<OurServiceProps> = ({ name, menu, grid = 'row' }) => (
  <div>
    <h3 className={styles.name}>{name}</h3>
    <ul className={classNames(styles.cards, grid === 'column' ? styles.column : styles.row)}>
      {menu.map((item) => (
        <OurServiceCard key={item.id} {...item} />
      ))}
    </ul>
  </div>
);
