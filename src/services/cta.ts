import { sanityClient } from "../lib/sanity.client";
import type { CTA } from "../types/cta";

const query = `
*[_type == "cta"][0]{
  _id,
  enabled,
  eyebrow,
  title,
  description,
  buttonText,
  buttonLink
}
`;

export async function getCTA(): Promise<CTA> {
  return sanityClient.fetch(query);
}