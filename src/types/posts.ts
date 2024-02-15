export interface RootPostsPage {
  data: RootPostsPageData[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface RootPostsPageData {
  id: number;
  attributes: RootPostsPageAttributes;
}

export interface RootPostsPageAttributes {
  content: string;
  slug: string;
  title: string;
  subTitle: string;
  bgImage: {
    data: {
      attributes: {
        url: string;
        name: string;
        width: number;
        height: number;
      };
    };
  };
}
