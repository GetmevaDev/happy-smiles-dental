'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React, { useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

import type { NavigationData, NavigationMenu, NavigationMenuService } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';

import styles from './navigation.module.scss';

interface NavigationProps {
  data: NavigationData[];
  categories: ServiceCategory[];
}

interface ServicesByCategory {
  [key: string]: NavigationMenuService[];
}

export const Navigation: FC<NavigationProps> = ({ data, categories }) => {
  const pathname = usePathname();

  const servicesPath = pathname.split('/')[1];

  const servicesByCategory = categories.reduce<ServicesByCategory>((acc, category) => {
    const filteredServices = data.flatMap(
      (item) =>
        item?.attributes?.menu?.services?.data?.filter(
          (service) => service.attributes.service_category.data.id === category.id
        ) || []
    );

    acc[category.attributes.category] = filteredServices;
    return acc;
  }, {});

  const renderSubMenu = (menu: NavigationMenu) => {
    if (menu.services?.data.length > 0) {
      return (
        <div className={styles.sub_menu}>
          {Object.entries(servicesByCategory).map(([category, item]) => (
            <div key={item.id} className={styles.sub_menu_item}>
              <div className={styles.category}>{category}</div>

              <ul className={styles.sub_menu_services}>
                {item.map((el: NavigationMenuService) => (
                  <li key={el.id} className={styles.sub_menu_item}>
                    <Link
                      href={
                        servicesPath === 'services'
                          ? `${el?.attributes?.slug}`
                          : `services/${el?.attributes?.slug}`
                      }
                    >
                      {el?.attributes?.title}
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
    <ul className={styles.menu_inner}>
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

            {/* <div className={styles.panel}> */}
            {item?.attributes?.menu && renderSubMenu(item?.attributes?.menu)}
            {/* </div> */}
          </li>
        ))}
    </ul>
  );
};
