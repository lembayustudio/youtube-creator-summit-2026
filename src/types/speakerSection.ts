export interface SpeakerSection {
  _id: string;
  enabled: boolean;
  eyebrow: string;
  title: string;
  description: string;
  layout: "auto" | "grid" | "carousel";
  maxItems: number;
  buttonText: string;
  buttonLink: string;
}