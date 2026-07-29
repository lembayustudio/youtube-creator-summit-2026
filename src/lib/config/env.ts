export const env = {
  rsvpApiUrl: import.meta.env.VITE_RSVP_API_URL,
} as const;

if (!env.rsvpApiUrl) {
  throw new Error("VITE_RSVP_API_URL is not configured.");
}