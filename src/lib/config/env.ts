export const env = {
  rsvpApiUrl: import.meta.env.VITE_RSVP_API_URL,
  cmsUrl: import.meta.env.VITE_CMS_URL,
} as const;

if (!env.rsvpApiUrl) {
  throw new Error("VITE_RSVP_API_URL is not configured.");
}

if (!env.cmsUrl) {
  throw new Error("VITE_CMS_URL is not configured.");
}