'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React, { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';

import type { NavigationData, NavigationMenuService } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';
import { useServicesByCategory } from '@/utils/hooks/useServicesByCategory';

import styles from './MobileMenu.module.scss';

export const MobileMenu: FC<{ data: NavigationData[]; categories: ServiceCategory[] }> = ({
  data,
  categories
}) => {
  const pathname = usePathname();
  const servicesPath = pathname.split('/')[1];

  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubMenus({});
  };

  const toggleSubMenu = (id: number) => {
    setOpenSubMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const servicesByCategory = useServicesByCategory(data, categories);

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };
  return (
    <div className={styles.mobile_menu}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.change : ''}`} />
        <span className={`${styles.bar} ${isOpen ? styles.change : ''}`} />
        <span className={`${styles.bar} ${isOpen ? styles.change : ''}`} />
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
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
                <div className={styles.menu_wrapper}>
                  <Link
                    className={
                      pathname === item?.attributes.slug ? styles.active : styles.menu_link
                    }
                    href={item.attributes.slug ? item.attributes.slug : '/'}
                    onClick={closeMenu}
                  >
                    {item?.attributes?.title}
                  </Link>
                  <div>
                    {item?.attributes.icon && (
                      <div
                        onClick={() => toggleSubMenu(item.id)}
                        onKeyPress={() => toggleSubMenu(item.id)}
                        role='button'
                        tabIndex={0}
                      >
                        <IoChevronDownOutline className={styles.icon} />
                      </div>
                    )}
                  </div>
                </div>

                {openSubMenus[item.id] &&
                  item?.attributes?.menu?.link &&
                  item?.attributes?.menu?.name && (
                    <ul>
                      <li className={styles.sub_menu_item}>
                        <Link href={item?.attributes?.menu?.link} onClick={closeMenu}>
                          {item?.attributes?.menu.name}
                        </Link>
                      </li>
                    </ul>
                  )}

                {openSubMenus[item.id] && item?.attributes?.menu?.services?.data.length > 0 && (
                  <div>
                    {Object.entries(servicesByCategory).map(([category, item]) => (
                      <div>
                        <div className={styles.service_category}>{category}</div>
                        <ul className={styles.sub_menu_services}>
                          {item?.map((el: NavigationMenuService) => (
                            <li key={el.id} className={styles.sub_menu_item}>
                              <Link
                                href={
                                  servicesPath === 'services' && 'blog'
                                    ? `${el?.attributes?.slug}`
                                    : `services/${el?.attributes?.slug}`
                                }
                                onClick={closeMenu}
                              >
                                {el?.attributes?.title.includes('Specialist Near New Hype Park')
                                  ? el?.attributes?.title.replace(
                                      / Specialist Near New Hype Park/g,
                                      ''
                                    )
                                  : el?.attributes?.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
