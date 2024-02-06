import React from 'react';

import { Typography } from '@/ui';

import { OurService } from './OurService/OurService';
import { OurServiceCard } from './OurServiceCard/OurServiceCard';
import styles from './OurServices.module.scss';

const services = [
  {
    id: 1,
    name: 'Core dentistry',
    menu: [
      { id: 1, value: 'Socket Preservation', path: '/' },
      { id: 2, value: 'Dental Implants and Implant Crowns', path: '/' },
      { id: 3, value: 'BPA FREE Dental Fillings', path: '/' },
      { id: 4, value: 'Bridges and Dentures', path: '/' },
      { id: 5, value: 'Root Canal', path: '/' },
      { id: 6, value: 'Tooth Extraction', path: '/' }
    ]
  },

  {
    id: 2,
    name: 'Preventative Dentistry',
    menu: [
      { id: 1, value: 'Socket Preservation', path: '/' },
      { id: 2, value: 'Dental Implants and Implant Crowns', path: '/' },
      { id: 3, value: 'BPA FREE Dental Fillings', path: '/' },
      { id: 4, value: 'Bridges and Dentures', path: '/' },
      { id: 5, value: 'Root Canal', path: '/' },
      { id: 6, value: 'Tooth Extraction', path: '/' }
    ]
  },

  {
    id: 3,
    name: 'Cosmetic Dentistry',
    menu: [
      { id: 1, value: 'Socket Preservation', path: '/' },
      { id: 2, value: 'Dental Implants and Implant Crowns', path: '/' },
      { id: 3, value: 'BPA FREE Dental Fillings', path: '/' },
      { id: 4, value: 'Bridges and Dentures', path: '/' },
      { id: 5, value: 'Root Canal', path: '/' },
      { id: 6, value: 'Tooth Extraction', path: '/' }
    ]
  }
];

export const OurServices = () => (
  <section className={styles.services}>
    <Typography className={styles.title} tag='h2'>
      Our services
    </Typography>

    <div className={styles.cards}>
      {services.map((service) => (
        <OurService key={service.id} menu={service.menu} name={service.name} />
      ))}
    </div>
  </section>
);
