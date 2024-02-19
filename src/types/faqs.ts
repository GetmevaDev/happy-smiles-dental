export interface FaqsRoot {
  data: FaqsData[];
}

export interface FaqsData {
  id: number;
  attributes: FaqsAttributes;
}

export interface FaqsAttributes {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
