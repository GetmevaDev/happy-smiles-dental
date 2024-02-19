import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { NavigationData } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';

import { Button } from '../button/button';
import { Navigation } from '../navigation/navigation';

import styles from './menu.module.scss';

interface MenuProps {
  data: NavigationData[];
  categories: ServiceCategory[];
}

export const Menu: FC<MenuProps> = ({ data, categories }) => (
  <nav className={styles.menu}>
    <div className={styles.top}>
      <div className={styles.info}>
        <div className={styles.info_inner}>
          <Image alt='time' height={38} src='/time.svg' width={30} />
        </div>

        <div className={styles.info_text}>
          <span className={styles.address}>
            1300 Union Turnpike, Suite 106, New Hyde Park 11040
          </span>
          <span className={styles.hours}>Working hours</span>
        </div>
      </div>

      <div className={styles.buttons}>
        <Button>Click to call</Button>
        <Button className={styles.btn}>Make an appointment</Button>
      </div>
    </div>

    <div className={styles.border} />

    <Navigation categories={categories} data={data} />
  </nav>
);
