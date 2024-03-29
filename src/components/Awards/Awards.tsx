'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ClinicAward } from '@/types/about-us-page';
// eslint-disable-next-line import/order
import { Typography } from '@/ui';

import 'swiper/css';
import 'swiper/css/navigation';

import useSwiperControl from '@/utils/hooks/useSwiperControl';

import { ArrowButton } from '../ArrowButtons/ArrowButton';

import styles from './Awards.module.scss';

export const Awards: FC<{ title: string; cards: ClinicAward[] }> = ({ title, cards }) => {
  const { swiperRef, setSwiperRef, isBeginning, isEnd, handlePrevious, handleNext } =
    useSwiperControl();

  return (
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
            navigation={{
              prevEl: '.custom-prev-class',
              nextEl: '.custom-next-class'
            }}
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={30}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className={styles.card}>
                  <Image
                    alt={card?.image?.data?.attributes?.alternativeText}
                    className={styles.image}
                    height={162}
                    src={card.image.data?.attributes.url}
                    width={162}
                  />

                  <div className={styles.text}>{card.text}.</div>
                </div>
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
