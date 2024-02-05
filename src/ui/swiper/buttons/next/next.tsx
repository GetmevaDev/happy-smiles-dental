import type { FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

import styles from "./next.module.scss";

interface SwiperButtonNextProps {
  children: ReactNode;
}

export const SwiperButtonNext: FC<SwiperButtonNextProps> = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className={styles.button} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};
