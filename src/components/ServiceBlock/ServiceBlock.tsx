'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';

import type { DataService, ServiceCategory } from '@/types/service-page';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

import { AvailableDoctors } from './AvailableDoctors/AvailableDoctors';
import styles from './ServiceBlock.module.scss';
import { ServiceBlockColumn } from './ServiceBlockColumn/ServiceBlockColumn';
import { ServiceBlockContent } from './ServiceBlockContent/ServiceBlockContent';

interface ServiceBlockProps {
  services: DataService[];
  categories: ServiceCategory[];
  content: string;
}

export const ServiceBlock: FC<ServiceBlockProps> = ({ services, categories, content }) => {
  const [categoriesExpandedState, setCategoriesExpandedState] = useState<{
    [key: number]: boolean;
  }>(categories.reduce((acc, curr) => ({ ...acc, [curr.id]: false }), {}));

  const groupedServices = useMemo(
    () =>
      categories.reduce(
        (acc, category) => {
          acc[category.id] = services.filter(
            (service) => service.attributes.service_category.data.id === category.id
          );
          return acc;
        },
        {} as Record<number, DataService[]>
      ),
    [categories]
  );
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  const toggleCategoryExpanded = (id: number) => {
    if (!isDesktop) {
      setCategoriesExpandedState({
        ...categoriesExpandedState,
        [id]: !categoriesExpandedState[id]
      });
    }
  };

  return (
    <section className={styles.service}>
      <div className={styles.left}>
        {categories.map((category) => (
          <div key={category.id} className={styles.category}>
            <h2 className={styles.sub_title} onClick={() => toggleCategoryExpanded(category.id)}>
              {category.attributes.category}
              <div className={styles.expand_button}>
                <Image
                  alt='chevron'
                  className={styles.svg}
                  height={20}
                  src={`/chevron-${categoriesExpandedState[category.id] ? 'up' : 'down'}.svg`}
                  width={20}
                />
              </div>
            </h2>
            {(categoriesExpandedState[category.id] || isDesktop) && (
              <ServiceBlockColumn services={groupedServices[category.id] || []} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <ServiceBlockContent content={content} />
        <AvailableDoctors />
      </div>
    </section>
  );
};
