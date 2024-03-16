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
        {/* <Image alt='tooth' className={styles.image} height={502} src={image} width={501} /> */}
        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className={styles.image} frameBorder="0" height="401" src="https://www.youtube.com/embed/4B0rbthMnXQ?si=CEWOF8L8vUAhUJXN" title="YouTube video player" width="501" />
        {/* <div className={styles.tooths}>
          <Image
            alt='tooth1'
            className={styles.tooth1}
            height={50}
            src='/tooth-small.png'
            width={50}
          />
          <Image
            alt='tooth2'
            className={styles.tooth2}
            height={50}
            src='/tooth-small.png'
            width={50}
          />
          <Image
            alt='tooth3'
            className={styles.tooth3}
            height={50}
            src='/tooth-small.png'
            width={50}
          />
        </div> */}
      </div>
    </section>
  );
};
