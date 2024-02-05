"use client";

import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { SwiperButtonNext } from "@/ui/swiper/buttons/next/next";
import { SwiperButtonPrev } from "@/ui/swiper/buttons/prev/prev";

import styles from "./Slider.module.scss";
import { SliderCard } from "./SliderCard/SliderCard";

export const Slider = () => {
  const swiper = useSwiper();

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
          navigation={{
            nextEl: styles.button_next,
            prevEl: styles.button_prev,
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          <div className={styles.buttons}>
            <SwiperButtonPrev>
              <Image
                alt="arrow-left"
                height={20}
                src="/left-arrow.svg"
                width={8}
              />
            </SwiperButtonPrev>

            <SwiperButtonNext>
              <Image
                alt="arrow-right"
                height={20}
                src="/right-arrow.svg"
                width={8}
              />
            </SwiperButtonNext>
          </div>

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
        </Swiper>
      </div>
    </div>
  );
};
