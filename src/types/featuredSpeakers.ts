export interface FeaturedSpeaker {
  name: string;
  role: string;
  company: string;
  bio?: string;
  photo?: {
    asset?: {
      url: string;
    };
  };
}

export type FeaturedSpeakersLayout =
  | "auto"
  | "banner"
  | "cards";

export interface FeaturedSpeakers {
  _id: string;

  enabled: boolean;

  eyebrow: string;
  title: string;
  description: string;

  layout: FeaturedSpeakersLayout;

  bannerImage?: {
    asset?: {
      url: string;
    };
  };

  buttonText?: string;
  buttonLink?: string;

  speakers: FeaturedSpeaker[];
}