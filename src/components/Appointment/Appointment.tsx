/* eslint-disable jsx-a11y/media-has-caption */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { memo, useRef, useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

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

export const Appointment: FC<AppointmentProps> = memo(({ video, description, phone }) => {
  const handle = useFullScreenHandle();

  return (
    <div className={styles.appointment_inner}>
      <div className={styles.video}>
        {video && (
          <FullScreen handle={handle}>
            <VideoBackground isFullScreen={handle.active} video={video} />
          </FullScreen>
        )}
      </div>

      <div className={styles.info_block}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Happy Smiles Dental <div>New Hyde Park</div>
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

          <div className={styles.expand}>
            <button className={styles.expand_button} onClick={handle.enter}>
              <svg
                fill='none'
                height='50'
                viewBox='0 0 50 50'
                width='50'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_428_140)'>
                  <path
                    clipRule='evenodd'
                    d='M9.76562 0H40.2344C42.8228 0.00498135 45.3039 1.03546 47.1342 2.86579C48.9645 4.69612 49.995 7.17715 50 9.76562V40.2344C49.995 42.8228 48.9645 45.3039 47.1342 47.1342C45.3039 48.9645 42.8228 49.995 40.2344 50H9.76562C7.17715 49.995 4.69612 48.9645 2.86579 47.1342C1.03546 45.3039 0.00498135 42.8228 0 40.2344L0 9.76562C0.00498135 7.17715 1.03546 4.69612 2.86579 2.86579C4.69612 1.03546 7.17715 0.00498135 9.76562 0ZM10.3516 37.8175C10.3517 38.3031 10.5447 38.7687 10.888 39.1121C11.2314 39.4554 11.697 39.6483 12.1826 39.6484H21.7659C22.008 39.6509 22.2481 39.6054 22.4725 39.5145C22.6968 39.4236 22.9009 39.2892 23.0729 39.1189C23.245 38.9486 23.3816 38.7459 23.4748 38.5225C23.568 38.2991 23.616 38.0594 23.616 37.8174C23.616 37.5753 23.568 37.3357 23.4748 37.1123C23.3816 36.8889 23.245 36.6862 23.0729 36.5159C22.9009 36.3456 22.6968 36.2111 22.4725 36.1202C22.2481 36.0293 22.008 35.9838 21.7659 35.9863H16.6033L23.4197 29.1699C23.7632 28.8265 23.9562 28.3607 23.9562 27.875C23.9563 27.3893 23.7634 26.9235 23.42 26.58C23.2499 26.41 23.0481 26.275 22.8259 26.183C22.6037 26.0909 22.3656 26.0435 22.1251 26.0435C21.6394 26.0435 21.1736 26.2364 20.8301 26.5798L14.0137 33.3972V28.2341C14.0087 27.7517 13.8136 27.2908 13.4707 26.9515C13.1279 26.6122 12.665 26.4218 12.1826 26.4218C11.7002 26.4218 11.2373 26.6122 10.8945 26.9515C10.5517 27.2908 10.3565 27.7517 10.3516 28.2341V37.8175ZM39.6484 12.1827C39.6483 11.6971 39.4554 11.2314 39.112 10.888C38.7687 10.5447 38.303 10.3517 37.8174 10.3516H28.2341C27.992 10.3491 27.7519 10.3946 27.5275 10.4855C27.3032 10.5764 27.0991 10.7109 26.9271 10.8811C26.755 11.0514 26.6184 11.2541 26.5252 11.4775C26.432 11.7009 26.384 11.9406 26.384 12.1826C26.384 12.4247 26.432 12.6643 26.5252 12.8877C26.6184 13.1111 26.755 13.3138 26.9271 13.4841C27.0991 13.6544 27.3032 13.7889 27.5275 13.8798C27.7519 13.9707 27.992 14.0162 28.2341 14.0137H33.3972L26.5798 20.8301C26.2363 21.1736 26.0434 21.6394 26.0434 22.1251C26.0434 22.6109 26.2363 23.0767 26.5798 23.4202C26.9233 23.7637 27.3891 23.9566 27.8749 23.9566C28.3606 23.9566 28.8265 23.7637 29.1699 23.4202L35.9863 16.6028V21.766C35.9913 22.2484 36.1864 22.7093 36.5293 23.0486C36.8721 23.3879 37.335 23.5783 37.8174 23.5783C38.2998 23.5783 38.7626 23.3879 39.1055 23.0486C39.4483 22.7093 39.6435 22.2484 39.6484 21.766V12.1827Z'
                    fill='white'
                    fillRule='evenodd'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_428_140'>
                    <rect fill='white' height='50' width='50' />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className={styles.expand_text}>Fullscreen</div>
          </div>
        </div>
      </div>
    </div>
  );
});
