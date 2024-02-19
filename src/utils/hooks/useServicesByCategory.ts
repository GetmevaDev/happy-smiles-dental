import React from 'react';

import type { NavigationData, NavigationMenuService } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';

interface ServicesByCategory {
  [key: string]: NavigationMenuService[];
}

export const useServicesByCategory = (data: NavigationData[], categories: ServiceCategory[]) =>
  React.useMemo(
    () =>
      categories.reduce<ServicesByCategory>((acc, category) => {
        const filteredServices = data.flatMap(
          (item) =>
            item?.attributes?.menu?.services?.data?.filter(
              (service) => service?.attributes?.service_category?.data?.id === category.id
            ) || []
        );

        acc[category.attributes.category] = filteredServices;
        return acc;
      }, {}),
    [data, categories]
  );
