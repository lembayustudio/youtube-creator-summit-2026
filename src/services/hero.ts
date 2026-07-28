import { sanityClient } from "../lib/sanity.client";
import type { Hero } from "../types/hero";

const heroQuery = `
  *[_type == "hero"][0]{
    _id,
    badge,
    titleLine1,
    titleLine2,
    titleHighlight,
    description,
    eventDate,
    eventTime,
    eventLocation,
    ctaText,
    ctaLink
  }
`;

export async function getHero(): Promise<Hero | null> {
  try {
    const data = await sanityClient.fetch(heroQuery);

    console.log("Hero data:", data);

    return data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    throw error;
  }
}