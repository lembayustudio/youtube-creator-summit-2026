import { sanityClient } from "../lib/sanity.client";
import type { Agenda } from "../types/agenda";

const query = `
*[_type == "agenda"][0]{
  _id,
  enabled,
  eyebrow,
  title,
  description,
  items[]{
    time,
    title,
    speaker,
    description
  }
}
`;

export async function getAgenda(): Promise<Agenda> {
  return sanityClient.fetch(query);
}