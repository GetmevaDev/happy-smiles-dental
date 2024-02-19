export interface ReviewsRoot {
  data: ReviewsData[];
}

export interface ReviewsData {
  id: number;
  attributes: ReviewAttributes;
}

export interface ReviewAttributes {
  description: string;
  title: string;
  yelpLink: boolean;
  googleLink: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
