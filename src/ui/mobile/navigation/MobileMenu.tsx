import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import React, { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';

import type { NavigationData } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';
import { useServicesByCategory } from '@/utils/hooks/useServicesByCategory';

import styles from './MobileMenu.module.scss';

export const MobileMenu: FC<{ data: NavigationData[]; categories: ServiceCategory[] }> = ({
  data,
  categories
}) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const servicesByCategory = useServicesByCategory(data, categories);

  console.log(servicesByCategory, 'servicesByCategory');

  return (
    <div>
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

                {/* {item?.attributes?.menu && renderSubMenu(item?.attributes?.menu)} */}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
