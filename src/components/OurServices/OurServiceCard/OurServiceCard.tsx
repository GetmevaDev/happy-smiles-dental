import classNames from "classnames";
import Image from "next/image";
import type { FC } from "react";
import React from "react";

import styles from "./OurServiceCard.module.scss";

export type MenuItem = {
  path: string;
  id: number;
  value: string;
};

export const OurServiceCard: FC<MenuItem> = ({ path, id, value }) => (
  <div className={styles.card}>
    <div className={styles.first} />
    <div className={styles.second} />
    <div className={styles.text}>{value}</div>
    <Image alt="arrow" height={30} src="/arrow.svg" width={30} />
  </div>
);