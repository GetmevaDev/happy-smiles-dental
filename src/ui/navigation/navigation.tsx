import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { navigation } from "@/utils/constants";
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
  );
};
