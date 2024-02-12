import type { FC } from 'react';
import React from 'react';

import type { Category, DataService, ServiceCategory } from '@/types/service-page';

import styles from './ServiceBlock.module.scss';
import { ServiceBlockColumn } from './ServiceBlockColumn/ServiceBlockColumn';
import { ServiceBlockContent } from './ServiceBlockContent/ServiceBlockContent';

interface ServiceBlockProps {
  services: DataService[];
  categories: ServiceCategory[];
  content: string;
}

export const ServiceBlock: FC<ServiceBlockProps> = ({ services, categories, content }) => {
  const groupedServices = categories.reduce(
    (acc, category) => {
      acc[category.id] = services.filter(
        (service) => service.attributes.service_category.data.id === category.id
      );
      return acc;
    },
    {} as Record<number, DataService[]>
  );

  return (
    <section className={styles.service}>
      <div className={styles.left}>
        {categories.map((category) => (
          <div key={category.id} className={styles.category}>
            <h2 className={styles.sub_title}>{category.attributes.category}</h2>
            <ServiceBlockColumn services={groupedServices[category.id] || []} />
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <ServiceBlockContent content={content} />
      </div>
    </section>
  );
};
