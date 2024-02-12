'use client';

import Image from 'next/image';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Typography } from '@/ui';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ClinicGallery.module.scss';

export const ClinicGallery = () => (
  <div className={styles.gallery}>
    <div className={styles.gallery_inner}>
      <Typography className={styles.title} tag='h2'>
        Clinic Gallery
      </Typography>

      <div>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 2
            },
            300: {
              slidesPerView: 1
            },
            900: {
              slidesPerView: 2
            }
          }}
          className='mySwiper'
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
        >
          <SwiperSlide>
            <Image
              alt='gallery'
              className={styles.image}
              height={400}
              src='/gallery-1.png'
              width={625}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              alt='gallery1'
              className={styles.image}
              height={400}
              src='/gallery-1.png'
              width={625}
            />
          </SwiperSlide>

          <div className={styles.buttons}>
            <button className={styles.prev}>Prev</button>
            <button className={styles.next}>Next</button>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
);
