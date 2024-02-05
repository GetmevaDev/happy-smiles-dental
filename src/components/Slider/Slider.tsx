"use client";

import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Slider.module.scss";
import { SliderCard } from "./SliderCard/SliderCard";

export const Slider = () => {
  const swiperRef = useRef();

  return (
    <div className={styles.slider}>
      <h2 className={styles.title}>What people say</h2>

      <div className={styles.slider_inner}>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
        >
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard />
          </SwiperSlide>

          <div className={styles.buttons}>
            <button className={styles.prev}>Prev</button>
            <button className={styles.next}>Next</button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
