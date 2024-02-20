'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import type { NavigationData } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';
import { ROUTES } from '@/utils/constants';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

import { Menu } from '../menu/menu';
import { MobileMenu } from '../mobile/navigation/MobileMenu';

import styles from './header.module.scss';

interface HeaderProps {
  data: NavigationData[];
  categories: ServiceCategory[];
}

export const Header: FC<HeaderProps> = ({ data, categories }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1100px)');

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
      className={`${styles.header} ${isDesktop && scrollPosition > 50 ? `${styles.fixed} ${styles.slideIn}` : ''}`}
    >
      <div className={styles.header_inner}>
        <Link href={ROUTES.ROOT}>
          <Image alt='logo' className={styles.logo} height={117} src='/logo.svg' width={295} />
        </Link>

        <div className={styles.menu}>
          <Menu categories={categories} data={data} />
        </div>
      </div>
    </header>
  );
};
