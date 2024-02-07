export interface ContentBlock {
  type: string;
  children?: TextBlock[];
}

interface TextBlock {
  text: string;
  type: string;
}

export interface RichBlockText {
  description: ContentBlock[];
}
