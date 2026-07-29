import { sanityClient } from "../lib/sanity.client";
import type { FeaturedSpeakers } from "../types/featuredSpeakers";

const query = `
*[_type == "featuredSpeakers"][0]{
  _id,
  enabled,
  eyebrow,
  title,
  description,
  layout,

  "desktopBanner": desktopBanner.asset->url,
"mobileBanner": mobileBanner.asset->url,

  buttonText,
  buttonLink,

  speakers[]{
    name,
    role,
    company,
    bio,
    photo{
      asset->{
        url
      }
    }
  }
}
`;

export async function getFeaturedSpeakers(): Promise<FeaturedSpeakers | null> {
  const data = await sanityClient.fetch(query);

  return data;
}