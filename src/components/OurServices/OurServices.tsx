'use client';

import type { FC } from 'react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import type { OurServicesDataI } from '@/types/home-page';
import { Typography } from '@/ui';

import { OurService } from './OurService/OurService';
import styles from './OurServices.module.scss';

interface OurServicesProps {
  title?: string;
  services: {
    id: number;
    attributes: {
      slug: string;
      title: string;
      service_category: {
        data: {
          id: number;
          attributes: {
            category: string;
          };
        };
      };
    };
  }[];
}

export const OurServices: FC<OurServicesProps> = ({ title, services }) => {
  const servicesByCategory = services.reduce<Record<string, OurServicesDataI[]>>((acc, service) => {
    const { category } = service.attributes.service_category.data.attributes;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className={`${styles.services} ${inView ? 'fadeInRight' : ''}`}>
      <Typography className={styles.title} tag='h2'>
        {title}
      </Typography>

      <div className={styles.cards}>
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <OurService key={category} menu={services} name={category} />
        ))}
      </div>
    </section>
  );
};
