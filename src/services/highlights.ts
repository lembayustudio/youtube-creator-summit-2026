import { sanityClient } from "../lib/sanity.client";
import type { Highlights } from "../types/highlights";

const query = `
*[_type == "highlights"][0]{
  _id,
  enabled,
  eyebrow,
  title,
  description,
  items[]{
    icon,
    title,
    description
  }
}
`;

export async function getHighlights(): Promise<Highlights> {
  return sanityClient.fetch(query);
}