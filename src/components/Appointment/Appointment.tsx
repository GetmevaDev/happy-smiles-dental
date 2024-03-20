/* eslint-disable jsx-a11y/media-has-caption */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useRef } from 'react';

import { Button } from '@/ui/button/button';

import { VideoBackground } from '../VideoBackground/VideoBackground';

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
    <div className={styles.appointment_inner}>
      <div className={styles.video}>{video && <VideoBackground video={video} />}</div>

      <div className={styles.info_block}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Happy Smiles Dental <div>New Hyde </div>
          </h1>

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
      </div>
    </div>
  );
};
