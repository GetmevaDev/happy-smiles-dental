export interface Images {
  data: ImageAttributes;
}

export interface ImageAttributes {
  attributes: ImageI;
}

export interface ImageI {
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
