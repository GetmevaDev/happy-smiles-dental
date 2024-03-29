import type { Seo } from './seo';

export interface PostPageRoot {
  data: PostPageData;
}

export interface PostPageData {
  id: number;
  attributes: PostPageAttributes;
}

export interface PostPageAttributes {
  content: string;
  slug: string;
  seo: Seo;

  title: string;
  subTitle: string;
  bgImage: {
    data: {
      attributes: {
        name: string;
        url: string;
        alternativeText: string;
      };
    };
  };
  createdAt: string;
}
