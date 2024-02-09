import classNames from 'classnames';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { Service } from '@/types/home-page';

import { OurServiceCard } from '../OurServiceCard/OurServiceCard';

import styles from './OurService.module.scss';

interface OurServiceProps {
  name: string;
  menu: {
    id: number;
    title: string;
    service: {
      data: {
        id: number;
        attributes: {
          slug: string;
        };
      };
    };
  }[];
  grid?: 'column' | 'row';
}

export const OurService: FC<OurServiceProps> = ({ name, menu, grid = 'row' }) => (
  <div>
    <h3 className={styles.name}>{name}</h3>
    <ul className={classNames(styles.cards, grid === 'column' ? styles.column : styles.row)}>
      {menu.map((item) => (
        <OurServiceCard
          key={item.id}
          slug={`/services/${item.service.data.attributes.slug}`}
          title={item.title}
        />
      ))}
    </ul>
  </div>
);
