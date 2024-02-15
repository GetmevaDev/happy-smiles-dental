import type { RootPostsPageData } from './posts';
import type { BannerTop } from './service-page';

export interface RootBlogPage {
  data: RootBlogPage;
}

export interface RootBlogPage {
  id: number;
  attributes: RootBlogPageAttributes;
}

export interface RootBlogPageAttributes {
  banner: BannerTop;
  posts: { data: RootPostsPageData[] };
}
