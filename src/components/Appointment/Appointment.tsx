'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React, { useRef } from 'react';

import { Button } from '@/ui/button/button';

import styles from './Appointment.module.scss';

interface AppointmentProps {
  title?: string;
  description?: string;
  image: string;
  phone?: string;
}

export const Appointment: FC<AppointmentProps> = ({ title, description, image, phone }) => {
  const sectionRef = useRef(null);

  return (
    <section className={styles.appointment}>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.description}>{description}</div>

        <div className={styles.make}>
          <Button>Make an appointment</Button>

          <div className={styles.phone}>
            <div className={styles.bg_phone}>
              <div className={styles.bg_phone_inner}>
                <Image alt='phone' height={24} src='/phone.svg' width={24} />
              </div>
            </div>

            <div className={styles.text}>
              <a className={styles.call} href={`tel: ${phone}`}>
                Click to call
              </a>
              <div className={styles.number}>{phone}</div>
            </div>
          </div>
        </div>
      </div>

      <Image alt='tooth' className={styles.image} height={502} src={image} width={501} />
    </section>
  );
};
