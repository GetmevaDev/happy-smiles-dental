import Image from "next/image";
import React from "react";

import styles from "./SliderCard.module.scss";

export const SliderCard = () => (
  <div className={styles.card}>
    <div className={styles.label}>Rajiev Timal</div>
    <div className={styles.content}>
      Best cleaning I’ve ever had. Dr. Gerov was very patient and explained what
      she was doing and why at all times. She was very transparent. It was a
      very positive experience and I feel much more confident about my oral
      health now. Thank you!
    </div>

    <div className={styles.rating}>
      <div className={styles.stars}>
        <Image alt="star" height={18} src="/star.svg" width={18} />
        <Image alt="star" height={18} src="/star.svg" width={18} />
        <Image alt="star" height={18} src="/star.svg" width={18} />
        <Image alt="star" height={18} src="/star.svg" width={18} />
        <Image alt="star" height={18} src="/star.svg" width={18} />
      </div>

      <div>
        <Image alt="yelp" height={36} src="/yelp.png" width={88} />
      </div>
    </div>
  </div>
);
