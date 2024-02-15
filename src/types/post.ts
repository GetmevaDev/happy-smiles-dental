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
  title: string;
  subTitle: string;
  bgImage: {
    data: {
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  createdAt: string;
}
