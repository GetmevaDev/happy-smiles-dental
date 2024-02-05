import type { FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

import styles from "./prev.module.scss";

interface SwiperButtonPrevProps {
  children: ReactNode;
}

export const SwiperButtonPrev: FC<SwiperButtonPrevProps> = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className={styles.button} onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};
