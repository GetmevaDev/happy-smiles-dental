import type { FC } from 'react';
import React from 'react';

import type { OurServiceI } from '@/types/home-page';
import { Typography } from '@/ui';

import { OurService } from './OurService/OurService';
import { OurServiceCard } from './OurServiceCard/OurServiceCard';
import styles from './OurServices.module.scss';

interface OurServicesProps {
  title?: string;
  services: OurServiceI[];
}

export const OurServices: FC<OurServicesProps> = ({ title, services }) => (
  <section className={styles.services}>
    <Typography className={styles.title} tag='h2'>
      {title}
    </Typography>

    <div className={styles.cards}>
      {services.map((service) => (
        <OurService key={service.id} menu={service.Service} name={service.name_service} />
      ))}
    </div>
  </section>
);
