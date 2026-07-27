import { sanityClient } from "../lib/sanity.client";
import type { Faq } from "../types/faq";

const query = `
*[_type == "faq"][0]{
  _id,
  enabled,
  eyebrow,
  title,
  description,
  items[]{
    question,
    answer
  }
}
`;

export async function getFaq(): Promise<Faq> {
  return sanityClient.fetch(query);
}