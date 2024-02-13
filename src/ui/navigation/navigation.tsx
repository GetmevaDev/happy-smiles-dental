import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React, { useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

import type { NavigationData, NavigationMenu, NavigationMenuService } from '@/types/navigation';
import { navigation } from '@/utils/constants';

import styles from './navigation.module.scss';

interface NavigationProps {
  data: NavigationData[];
}

export const Navigation: FC<NavigationProps> = ({ data }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const pathname = usePathname();

  const renderSubMenu = (menu: NavigationMenu, id: number) => {
    if (menu.services?.data.length > 0) {
      return (
        <ul className={`${styles.sub_menu} ${activeSubMenu === id ? styles.sub_menu_active : ''}`}>
          {menu.services.data.map((service) => (
            <li key={service.id} className={styles.sub_menu_item}>
              <Link href={`services/${service.attributes.slug}`}>{service.attributes.title}</Link>
            </li>
          ))}
        </ul>
      );
    }

    if (menu.link && menu.name) {
      return (
        <ul className={styles.sub_menu}>
          <li className={styles.sub_menu_item}>
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        </ul>
      );
    }

    return null;
  };

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
              {item?.attributes.icon && (
                <div>
                  {activeSubMenu === item.id ? (
                    <IoChevronDownOutline className={styles.icon} />
                  ) : (
                    <IoChevronUpOutline />
                  )}
                </div>
              )}
            </div>

            {item?.attributes?.menu && renderSubMenu(item?.attributes?.menu, item.id)}
          </li>
        ))}
    </ul>
  );
};
