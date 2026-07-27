export interface HighlightItem {
  icon?: string;
  title: string;
  description?: string;
}

export interface Highlights {
  _id: string;
  enabled: boolean;
  eyebrow?: string;
  title: string;
  description?: string;
  items: HighlightItem[];
}