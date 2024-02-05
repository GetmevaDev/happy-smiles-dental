"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ROUTES } from "@/utils/constants";

import { Menu } from "../menu/menu";
import { Navigation } from "../navigation/navigation";

import styles from "./footer.module.scss";



export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.border} />
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image alt="logo" height={72} src="/logo.svg" width={180} />

          <div className={styles.copyright}>
            ©Copyright {year}.<br /> All rights reserved
          </div>
        </div>
        <div className={styles.social}>
          <Image alt="facebook" height={32} src="/facebook.svg" width={32} />
          <Image alt="instagramm" height={32} src="/instagram.svg" width={32} />
        </div>

        <div className={styles.meva}>
          <Link href="https://meva.app/">
            <Image alt="meva" height={28} src="/meva.png" width={130} />
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
            <Image alt="star" height={18} src="/star.svg" width={18} />
            <Image alt="star" height={18} src="/star.svg" width={18} />
            <Image alt="star" height={18} src="/star.svg" width={18} />
            <Image alt="star" height={18} src="/star.svg" width={18} />
            <Image alt="star" height={18} src="/star.svg" width={18} />
          </div>
          <div className={styles.star_info}>Rating 5/5 (120 reviews)</div>
        </div>
      </div>

      <div className={styles.border} />
      <div className={styles.bottom}>
        <Navigation />

        <Link className={styles.terms} href={ROUTES.TERMS_OF_SERVICE}>
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};
