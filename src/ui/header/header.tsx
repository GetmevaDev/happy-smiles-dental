"use client";
import React, { useEffect, useState } from "react";

import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";
import { Menu } from "../menu/menu";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrollPosition > 50 ? `${styles.fixed} ${styles.slideIn}` : ""
      }`}
    >
      <div className={styles.header_inner}>
        <Link href={ROUTES.ROOT}>
          <Image width={295} height={117} alt="logo" src="/logo.svg" />
        </Link>

        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
};
