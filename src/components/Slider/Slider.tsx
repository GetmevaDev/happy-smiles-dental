'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React, { useCallback, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Navigation } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import type { SliderCardI } from '@/types/home-page';
import type { ReviewsData } from '@/types/reviews';
import useSwiperControl from '@/utils/hooks/useSwiperControl';

import { ArrowButton } from '../ArrowButtons/ArrowButton';

import styles from './Slider.module.scss';
import { SliderCard } from './SliderCard/SliderCard';

export const Slider: FC<{ title?: string; cards: ReviewsData[] }> = ({ title, cards }) => {
  const { swiperRef, setSwiperRef, isBeginning, isEnd, handlePrevious, handleNext } =
    useSwiperControl();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      ref={ref}
      className={styles.slider}
      style={{
        backgroundImage: 'url(/slider.png)'
      }}
    >
      <div className={`${styles.slider_wrap} ${inView ? 'fadeInUp' : ''}`}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <div className={styles.slider_inner}>
          <Swiper
            breakpoints={{
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
                <SliderCard {...card} />
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
    </section>
  );
};
