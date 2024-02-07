import type { FC } from 'react';
import React from 'react';

import type { Service } from '@/types/home-page';

import type { MenuItem } from '../OurServiceCard/OurServiceCard';
import { OurServiceCard } from '../OurServiceCard/OurServiceCard';

import styles from './OurService.module.scss';

interface OurServiceProps {
  name: string;
  menu: Service[];
}

export const OurService: FC<OurServiceProps> = ({ name, menu }) => (
  <div>
    <h3 className={styles.name}>{name}</h3>
    <ul className={styles.cards}>
      {menu.map((item) => (
        <OurServiceCard key={item.id} {...item} />
      ))}
    </ul>
  </div>
);
