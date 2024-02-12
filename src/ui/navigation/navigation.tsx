import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React, { useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

import type { NavigationData, NavigationMenuService } from '@/types/navigation';
import { navigation } from '@/utils/constants';

import styles from './navigation.module.scss';

interface NavigationProps {
  data: NavigationData[];
}

export const Navigation: FC<NavigationProps> = ({ data }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const pathname = usePathname();

  const renderSubMenu = (menu: NavigationMenuService[], id: number) => (
    <ul className={`${styles.sub_menu} ${activeSubMenu === id ? styles.sub_menu_active : ''}`}>
      {menu.map((subMenuItem) => (
        <li key={subMenuItem.id} className={styles.sub_menu_item}>
          <Link
            className={
              pathname === subMenuItem.attributes.banner.title ? styles.active : styles.link
            }
            href={subMenuItem.attributes.slug}
          >
            {subMenuItem.attributes.banner.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className={styles.menu_inner}>
      {data
        ?.sort((a, b) => a.id - b.id)
        .map((item) => (
          <li key={item.id} className={styles.menu_item}>
            <Link
              className={pathname === item?.attributes.slug ? styles.active : styles.menu_link}
              href={item.attributes.slug ? item.attributes.slug : '/'}
            >
              {item.attributes.title}
            </Link>
            <div>
              {item?.attributes && (
                <div>
                  {activeSubMenu === item.id ? (
                    <IoChevronDownOutline className={styles.icon} />
                  ) : (
                    <IoChevronUpOutline />
                  )}
                </div>
              )}
            </div>
            {item?.attributes?.menu?.services?.data.length > 0 &&
              renderSubMenu(item?.attributes?.menu?.services?.data, item.id)}
          </li>
        ))}
    </ul>
  );
};
