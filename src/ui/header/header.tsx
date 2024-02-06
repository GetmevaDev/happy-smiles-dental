'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { ROUTES } from '@/utils/constants';

import { Menu } from '../menu/menu';

import styles from './header.module.scss';

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrollPosition > 50 ? `${styles.fixed} ${styles.slideIn}` : ''
      }`}
    >
      <div className={styles.header_inner}>
        <Link href={ROUTES.ROOT}>
          <Image alt='logo' height={117} src='/logo.svg' width={295} />
        </Link>

        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
};