import type { ServiceCategory } from './service-page';

export interface RooutObjectNavigation {
  data: NavigationData[];
}

export interface NavigationData {
  attributes: Attributes;
  id: number;
}

export interface Attributes {
  title: string;
  slug: string;
  menu: NavigationMenu;
  icon: boolean;
}

export interface NavigationMenu {
  id: number;
  services: NavigationMenuServices;
  name: string;
  link: string;
}

export interface NavigationMenuServices {
  data: NavigationMenuService[];
}

export interface NavigationMenuService {
  id: number;
  attributes: {
    banner: {
      title: string;
    };
    service_category: ServiceCategory;
    slug: string;
  };
}
