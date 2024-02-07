export interface Images {
  data: ImageAttributes;
}

export interface ImageAttributes {
  attributes: Image;
}

export interface Image {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  folderPath: string;
  createdAt: string;
  updatedAt: string;
}
