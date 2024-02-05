import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

import styles from "./menu.module.scss";
import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import { Button } from "../button/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

type subMenuItem = {
  label: string;
  path: string;
};

interface SubMenuProps {
  subMenu: subMenuItem[];
  id: string;
  activeSubMenu: string;
}

const navigation = [
  { id: 1, path: ROUTES.ROOT, title: "Home" },
  {
    id: 2,
    path: ROUTES.ABOUT_US,
    title: "About Us",
    subMenu: [
      {
        label: "1",
        path: "/1",
      },
    ],
    icon: true,
  },
  {
    id: 3,
    path: ROUTES.SERVICES,
    title: "Services",
    subMenu: [
      {
        label: "2",
        path: "/3",
      },
    ],
    icon: true,
  },
  { id: 4, path: ROUTES.TECHNOLOGY, title: "Technology" },
  { id: 5, path: ROUTES.ACCEPTED_INSURANCES, title: "Accepted Insurances" },
  { id: 6, path: ROUTES.PROMOTIONS, title: "Promotions" },
  {
    id: 7,
    path: ROUTES.CONTACT_US,
    title: "Contact Us",
    subMenu: [
      {
        label: "3",
        path: "/3",
      },
    ],
    icon: true,
  },
];

export const Menu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const pathname = usePathname();

  const renderSubMenu = ({ subMenu, id }: SubMenuProps) => (
    <ul
      className={`${styles.sub_menu} ${
        activeSubMenu === id ? styles.sub_menu_active : ""
      }`}
    >
      {subMenu?.map((subMenuItem) => (
        <li key={subMenuItem.label} className={styles.sub_menu_item}>
          <Link
            href={subMenuItem.path}
            className={
              pathname === subMenuItem?.path ? styles.active : styles.link
            }
          >
            {subMenuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

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

      <ul className={styles.menu_inner}>
        {navigation.map((item) => (
          <li className={styles.menu_item} key={item.id}>
            <Link
              className={
                pathname === item?.path ? styles.active : styles.menu_link
              }
              href={item.path}
            >
              {item.title}
            </Link>
            <div>
              {item?.icon && (
                <div>
                  {activeSubMenu === item.id ? (
                    <IoChevronDownOutline className={styles.icon} />
                  ) : (
                    <IoChevronUpOutline />
                  )}
                </div>
              )}
            </div>
            {item?.subMenu?.length > 0 && renderSubMenu(item?.subMenu, item.id)}
          </li>
        ))}
      </ul>
    </nav>
  );
};
