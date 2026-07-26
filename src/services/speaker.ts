import { sanityClient } from "../lib/sanity.client";
import type { Speaker } from "../types/speaker";

const query = `
*[_type == "speaker" && featured == true]
| order(displayOrder asc){
  _id,
  name,
  role,
  company,
  bio,
  photo,
  displayOrder,
  featured
}
`;

export async function getSpeakers(): Promise<Speaker[]> {
  return sanityClient.fetch(query);
}