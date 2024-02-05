import React, { useState } from "react";

import styles from "./menu.module.scss";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import { Button } from "../button/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Menu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const pathname = usePathname();

  return (
    <nav className={styles.menu}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.info_inner}>
            <Image width={30} height={38} alt="time" src="/time.svg" />
          </div>

          <div className={styles.info_text}>
            <span className={styles.address}>
              1300 Union Turnpike, Suite 106, New Hyde Park 11040
            </span>
            <span className={styles.hours}>Working hours</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button>Click to call</Button>
          <Button>Make an appointment</Button>
        </div>
      </div>

      <div className={styles.border} />
    </nav>
  );
};
