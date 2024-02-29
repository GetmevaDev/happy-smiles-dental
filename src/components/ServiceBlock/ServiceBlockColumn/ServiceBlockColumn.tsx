'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { FC } from 'react';
import React from 'react';

import type { DataService } from '@/types/service-page';

import styles from './ServiceBlockColumn.module.scss';

export const ServiceBlockColumn: FC<{ services: DataService[] }> = ({ services }) => {
  const { slug } = useParams();

  return (
    <div className={styles.column}>
      {services.map((service) => (
        <Link
          key={service.id}
          className={classNames(
            styles.card,
            slug === service?.attributes?.slug ? styles.card_active : styles.card_unactive
          )}
          href={service.attributes.slug}
        >
          <div className={styles.first} />
          <div className={styles.second} />
          <div className={styles.text}>{service?.attributes?.title}</div>
          <Image alt='arrow' height={30} src='/arrow.svg' width={30} />
        </Link>
      ))}
    </div>
  );
};
