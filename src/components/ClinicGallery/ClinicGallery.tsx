'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Image as ClinicImage } from '@/types/about-us-page';
import { Typography } from '@/ui';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ClinicGallery.module.scss';

export const ClinicGallery: FC<{ images: ClinicImage[] }> = ({ images }) => (
  <div className={styles.gallery}>
    <div className={styles.gallery_inner}>
      <Typography className={styles.title} tag='h2'>
        Clinic Gallery
      </Typography>

      <div>
        <Swiper
          breakpoints={{
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
          {images?.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                alt='gallery'
                className={styles.image}
                height={400}
                src={image.attributes.url}
                width={625}
              />
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
