export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaImage: Image;
  metaSocial: MetaSocial[];
  keywords: string;
  metaRobots: string;
  structuredData: string;
  metaViewport: string;
  canonicalURL: string;
}

export interface Image {
  data: {
    attributes: {
      url: string;
      name: string;
      width: number;
      height: number;
    };
  };
}

export interface MetaSocial {
  id: number;
  socialNetwork: string;
  title: string;
  description: string;
}
