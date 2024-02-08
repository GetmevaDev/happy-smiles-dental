export interface NavigationI {
  data: NavigationData[];
}

export interface NavigationData {
  attributes: NavigationItem;
  id: number;
}

export interface NavigationItem {
  title: string;
  slug: string;
  icon?: boolean;
}
