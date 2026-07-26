import { sanityClient } from "../lib/sanity.client";
import type { SpeakerSection } from "../types/speakerSection";

const query = `
*[_type == "speakerSection"][0]{
  _id,
  enabled,
  eyebrow,
  title,
  description,
  layout,
  maxItems,
  buttonText,
  buttonLink
}
`;

export async function getSpeakerSection(): Promise<SpeakerSection | null> {
  return sanityClient.fetch(query);
}