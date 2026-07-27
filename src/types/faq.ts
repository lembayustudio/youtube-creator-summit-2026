export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq {
  _id: string;
  enabled: boolean;
  eyebrow?: string;
  title: string;
  description?: string;
  items: FaqItem[];
}