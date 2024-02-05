"use client";

import React from "react";

import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/utils/constants";

const links = [{ id: 1, title: "Home", href: "/" }];

export const Footer = () => {
  return <footer className={styles.footer}></footer>;
};
