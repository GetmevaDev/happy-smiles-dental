import type { FC } from 'react';
import React from 'react';

import type {
  OurServiceI,
  OurServicesAttributes,
  OurServicesDataI,
  Service
} from '@/types/home-page';
import { Typography } from '@/ui';

import { OurService } from './OurService/OurService';
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
      {services.map((item) => (
        <OurService
          key={item.id}
          menu={item?.Service?.services?.data || []}
          name={item.name_service}
        />
      ))}
    </div>
  </section>
);
