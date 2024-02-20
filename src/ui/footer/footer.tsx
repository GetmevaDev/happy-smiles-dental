'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React from 'react';

import type { NavigationData } from '@/types/navigation';
import { ROUTES } from '@/utils/constants';

import { Button } from '../button/button';

import styles from './footer.module.scss';

export const Footer: FC<{ data: NavigationData[] }> = ({ data }) => {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.border} />
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image alt='logo' height={72} src='/logo.svg' width={180} />

          <div className={styles.copyright}>
            ©Copyright {year}.<br /> All rights reserved
          </div>
        </div>
        <div className={styles.social}>
          <Image alt='facebook' height={32} src='/facebook.svg' width={32} />
          <Image alt='instagramm' height={32} src='/instagram.svg' width={32} />
        </div>

        <div className={styles.meva}>
          <Link href='https://getmeva.com/'>
            <Image alt='meva' height={28} src='/meva.png' width={130} />
          </Link>
          <div className={styles.by}>
            Powered by{' '}
            <span>
              <Link href='https://getmeva.com/'>Meva</Link>
            </span>
          </div>
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            <Image alt='star' height={18} src='/star.svg' width={18} />
            <Image alt='star' height={18} src='/star.svg' width={18} />
            <Image alt='star' height={18} src='/star.svg' width={18} />
            <Image alt='star' height={18} src='/star.svg' width={18} />
            <Image alt='star' height={18} src='/star.svg' width={18} />
          </div>
          <div className={styles.star_info}>Rating 5/5 (120 reviews)</div>
        </div>
      </div>

      <div className={styles.border} />
      <div className={styles.bottom}>
        <ul className={styles.menu}>
          {data
            .sort((a, b) => a.id - b.id)
            .map((item) => (
              <li key={item.id}>
                <Link
                  className={
                    pathname === `${item.attributes.slug}` ? styles.active : styles.menu_link
                  }
                  href={item.attributes.slug || '/'}
                >
                  {item.attributes.title}
                </Link>
              </li>
            ))}
          <li>
            <Link className={pathname === '/blog' ? styles.active : styles.menu_link} href='/blog'>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <div className={styles.block}>
          <a className={styles.link} href='tel:(516) 354-7551'>
            Click to call
          </a>
        </div>
        <div className={styles.block}>
          <a className={styles.link} href='https://app.nexhealth.com/appt/happy-smiles-dental'>
            Make an appointment
          </a>
        </div>
      </div>
    </footer>
  );
};
