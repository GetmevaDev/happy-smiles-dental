'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ClinicAward } from '@/types/about-us-page';
import { Typography } from '@/ui';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Awards.module.scss';

export const Awards: FC<{ title: string; cards: ClinicAward[] }> = ({ title, cards }) => (
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
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className={styles.card}>
                <Image
                  alt='image'
                  className={styles.image}
                  height={162}
                  src={card.image.data?.attributes.url}
                  width={162}
                />

                <div className={styles.text}>{card.text}.</div>
              </div>
            </SwiperSlide>
          ))}

          <div className={styles.buttons}>
            <button className={styles.prev}>Prev</button>
            <button className={styles.next}>Next</button>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
);
