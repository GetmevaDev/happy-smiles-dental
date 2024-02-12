'use client';

import Image from 'next/image';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Typography } from '@/ui';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Awards.module.scss';

export const Awards = () => (
  <div className={styles.gallery}>
    <div className={styles.gallery_inner}>
      <Typography className={styles.title} tag='h2'>
        Clinic Awards
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
              slidesPerView: 3
            }
          }}
          className='mySwiper'
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className={styles.card}>
              <Image
                alt='image'
                className={styles.image}
                height={162}
                src='/image 17.png'
                width={162}
              />

              <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.card}>
              <Image
                alt='image'
                className={styles.image}
                height={162}
                src='/image 17.png'
                width={162}
              />
              <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.card}>
              <Image
                alt='image'
                className={styles.image}
                height={162}
                src='/image 17.png'
                width={162}
              />
              <div className={styles.text}>Lorem ipsum dolor sit amet.</div>
            </div>
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
