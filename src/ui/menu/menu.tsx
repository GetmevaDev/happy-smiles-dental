import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { ROUTES } from '@/utils/constants';

import { Button } from '../button/button';
import { Navigation } from '../navigation/navigation';

import styles from './menu.module.scss';

export const Menu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const pathname = usePathname();

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
            <span className={styles.hours}>Working hours</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button>Click to call</Button>
          <Button className={styles.btn}>Make an appointment</Button>
        </div>
      </div>

      <div className={styles.border} />

      <Navigation />
    </nav>
  );
};
