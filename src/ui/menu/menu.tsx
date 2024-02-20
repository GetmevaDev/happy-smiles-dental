import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import type { NavigationData } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

import { Button } from '../button/button';
import { MobileMenu } from '../mobile/navigation/MobileMenu';
import { Navigation } from '../navigation/navigation';

import styles from './menu.module.scss';

interface MenuProps {
  data: NavigationData[];
  categories: ServiceCategory[];
}

export const Menu: FC<MenuProps> = ({ data, categories }) => {
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  return (
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
            <Link href='/contact-us'>
              <span className={styles.hours}>Working hours</span>
            </Link>
          </div>
        </div>

        <div className={styles.buttons}>
          <a href='tel:(516) 354-7551'>
            <Button>Click to call</Button>
          </a>
          <Link href='https://app.nexhealth.com/appt/happy-smiles-dental'>
            <Button className={styles.btn}>Make an appointment</Button>
          </Link>
        </div>
      </div>

      <div className={styles.border} />

      {isDesktop ? (
        <Navigation categories={categories} data={data} />
      ) : (
        <MobileMenu categories={categories} data={data} />
      )}
    </nav>
  );
};
