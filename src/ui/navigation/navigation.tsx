'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React, { useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoClose, IoMenu } from 'react-icons/io5';

import type { NavigationData, NavigationMenu, NavigationMenuService } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';
import { useServicesByCategory } from '@/utils/hooks/useServicesByCategory';

import styles from './navigation.module.scss';

interface NavigationProps {
  data: NavigationData[];
  categories: ServiceCategory[];
}

interface ServicesByCategory {
  [category: string]: NavigationMenuService[];
}

export const Navigation: FC<NavigationProps> = ({ data, categories }) => {
  const pathname = usePathname();

  const servicesPath = pathname.split('/')[1];

  const servicesByCategory = useServicesByCategory(data, categories);

  const renderSubMenu = (menu: NavigationMenu) => {
    if (menu.services?.data.length > 0) {
      return (
        <div className={styles.sub_menu}>
          {Object.entries(servicesByCategory as ServicesByCategory).map(([category, item]) => (
            <div key={category} className={styles.sub_menu_item}>
              <div className={styles.category}>{category}</div>
              <ul className={styles.sub_menu_services}>
                {item?.map((el: NavigationMenuService) => (
                  <li key={el.id} className={styles.sub_menu_item}>
                    <Link
                      href={
                        servicesPath === 'services' && 'blog'
                          ? `${el?.attributes?.slug}`
                          : `services/${el?.attributes?.slug}`
                      }
                    >
                      {el?.attributes?.otherTitle || el?.attributes?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (menu.link && menu.name) {
      return (
        <ul className={styles.sub_menu_once}>
          <li className={styles.sub_menu_item}>
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        </ul>
      );
    }

    return null;
  };

  return (
    <ul className={classNames(styles.menu_inner)}>
      {data
        ?.sort((a, b) => a.id - b.id)
        .map((item) => (
          <li
            key={item.id}
            className={classNames(styles.menu_item, {
              [styles.active]: pathname === item.attributes.slug
            })}
          >
            <Link
              className={pathname === item?.attributes.slug ? styles.active : styles.menu_link}
              href={item.attributes.slug ? item.attributes.slug : '/'}
            >
              {item?.attributes?.title}
            </Link>
            <div>
              {item?.attributes.icon && (
                <div>
                  <IoChevronDownOutline className={styles.icon} />
                </div>
              )}
            </div>

            {item?.attributes?.menu && renderSubMenu(item?.attributes?.menu)}
          </li>
        ))}
    </ul>
  );
};
