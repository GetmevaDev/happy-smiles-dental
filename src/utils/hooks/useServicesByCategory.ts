import React from 'react';

import type { NavigationData } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';

export const useServicesByCategory = (data: NavigationData[], categories: ServiceCategory[]) =>
  React.useMemo(
    () =>
      categories.reduce((acc, category) => {
        const filteredServices = data.flatMap(
          (item) =>
            item?.attributes?.menu?.services?.data?.filter(
              (service) => service.attributes.service_category.data.id === category.id
            ) || []
        );

        acc[category.attributes.category] = filteredServices;
        return acc;
      }, {}),
    [data, categories]
  );
