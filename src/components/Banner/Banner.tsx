import React from "react";

import styles from "./Banner.module.scss";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image width={387} height={394} alt="tooth" src="/tooth-1.png" />
    </div>
  );
};
