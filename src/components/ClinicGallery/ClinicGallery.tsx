'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Image as ClinicImage } from '@/types/about-us-page';
// eslint-disable-next-line import/order
import { Typography } from '@/ui';

import 'swiper/css';
import 'swiper/css/navigation';

import useSwiperControl from '@/utils/hooks/useSwiperControl';

import { ArrowButton } from '../ArrowButtons/ArrowButton';

import styles from './ClinicGallery.module.scss';

export const ClinicGallery: FC<{ images: ClinicImage[] }> = ({ images }) => {
  const { swiperRef, setSwiperRef, isBeginning, isEnd, handlePrevious, handleNext } =
    useSwiperControl();
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery_inner}>
        <Typography className={styles.title} tag='h2'>
          Clinic Gallery
        </Typography>

        <div className={styles.swiper}>
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1
              },
              900: {
                slidesPerView: 1
              },

              1200: {
                slidesPerView: 1
              },
              1400: {
                slidesPerView: 2
              }
            }}
            className='mySwiper'
            modules={[Navigation]}
            navigation={{
              prevEl: '.custom-prev-class',
              nextEl: '.custom-next-class'
            }}
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={30}
          >
            {images?.map((image) => (
              <SwiperSlide key={image.id} className={styles.swiper_slide}>
                <Image
                  alt='gallery'
                  className={styles.image}
                  height={400}
                  src={image?.attributes?.url}
                  width={625}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.buttons}>
          <ArrowButton
            className={`custom-prev-class ${isBeginning ? 'swiper-button-disabled' : ''}`}
            direction='left'
            onClick={handlePrevious}
          />
          <ArrowButton
            className={`custom-next-class ${isEnd ? 'swiper-button-disabled' : ''}`}
            direction='right'
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};
