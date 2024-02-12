'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React, { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import type { SliderCardI } from '@/types/home-page';

import styles from './Slider.module.scss';
import { SliderCard } from './SliderCard/SliderCard';

export const Slider: FC<{ title?: string; cards: SliderCardI[] }> = ({ title, cards }) => {
  const swiperRef = useRef();

  return (
    <section className={styles.slider}>
      <Image alt='slider' className={styles.image} height={760} src='/slider.png' width={1480} />
      <div className={styles.slider_wrap}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.slider_inner}>
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
                <SliderCard {...card} />
              </SwiperSlide>
            ))}

            <div className={styles.buttons}>
              <button className={styles.prev}>Prev</button>
              <button className={styles.next}>Next</button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
