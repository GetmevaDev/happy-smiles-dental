"use client";

import React from "react";

import styles from "./footer.module.scss";
import { Menu } from "../menu/menu";
import { Navigation } from "../navigation/navigation";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import Image from "next/image";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.border} />
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image width={180} height={72} alt="logo" src="/logo.svg" />

          <div className={styles.copyright}>
            ©Copyright {year}.<br /> All rights reserved
          </div>
        </div>
        <div className={styles.social}>
          <Image width={32} height={32} src="/facebook.svg" alt="facebook" />
          <Image width={32} height={32} src="/instagram.svg" alt="instagramm" />
        </div>

        <div className={styles.meva}>
          <Link href="https://meva.app/">
            <Image width={130} height={28} src="/meva.png" alt="meva" />
          </Link>
          <div className={styles.by}>
            Powered by{" "}
            <span>
              <Link href="https://meva.app/">Meva</Link>
            </span>
          </div>
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            <Image width={18} height={18} src="/star.svg" alt="star" />
            <Image width={18} height={18} src="/star.svg" alt="star" />
            <Image width={18} height={18} src="/star.svg" alt="star" />
            <Image width={18} height={18} src="/star.svg" alt="star" />
            <Image width={18} height={18} src="/star.svg" alt="star" />
          </div>
          <div className={styles.star_info}>Rating 5/5 (120 reviews)</div>
        </div>
      </div>

      <div className={styles.border} />
      <div className={styles.bottom}>
        <Navigation />

        <Link href={ROUTES.TERMS_OF_SERVICE} className={styles.terms}>
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};
