import { sanityClient } from "../lib/sanity.client";
import type { Hero } from "../types/hero";

const heroQuery = `
  *[_type == "hero"][0]{
    _id,
    badge,
    title,
    description,
    eventDate,
    eventTime,
    eventLocation,
    ctaText,
    ctaLink
  }
`;

export async function getHero(): Promise<Hero | null> {
  return sanityClient.fetch(heroQuery);
}