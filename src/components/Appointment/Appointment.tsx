/* eslint-disable jsx-a11y/media-has-caption */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useRef } from 'react';

import { Button } from '@/ui/button/button';

import styles from './Appointment.module.scss';

interface AppointmentProps {
  title?: string;
  description?: string;
  image: string;
  video?: string;
  phone?: string;
}

export const Appointment: FC<AppointmentProps> = ({ title, video, description, image, phone }) => {
  const sectionRef = useRef(null);

  return (
    <section className={styles.appointment}>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.description}>{description}</div>

        <div className={styles.make}>
          <Link href='https://app.nexhealth.com/appt/happy-smiles-dental'>
            <Button>Make an appointment</Button>
          </Link>

          <div className={styles.phone}>
            <div className={styles.bg_phone}>
              <Image alt='phone' height={24} src='/phone.svg' width={24} />
            </div>

            <div className={styles.text}>
              <a className={styles.call} href={`tel: ${phone}`}>
                Click to call
              </a>
              <div className={styles.number}>
                <a href={`tel: ${phone}`}>{phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image_inner}>
        <video autoPlay controls height='302' width='500'>
          <source src={video} type='video/mp4' />
        </video>

        {/* <Image alt='tooth' className={styles.image} height={502} src={image} width={501} /> */}
      </div>
    </section>
  );
};
