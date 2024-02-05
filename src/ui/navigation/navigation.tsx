import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

import { navigation } from "@/utils/constants";

import styles from "./navigation.module.scss";

type SubMenuItem = {
  label: string;
  path: string;
};

interface SubMenuProps {
  subMenu: SubMenuItem[];
  id: string;
  activeSubMenu: string;
}

export const Navigation = () => {
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
            className={
              pathname === subMenuItem?.path ? styles.active : styles.link
            }
            href={subMenuItem.path}
          >
            {subMenuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className={styles.menu_inner}>
      {navigation.map((item) => (
        <li key={item.id} className={styles.menu_item}>
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
          {/* {item?.subMenu?.length > 0 && renderSubMenu(item?.subMenu, item.id)} */}
        </li>
      ))}
    </ul>
  );
};
