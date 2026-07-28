import type { RSVPFormData } from "../types/rsvp";

export function validateRSVP(data: RSVPFormData): string | null {
  if (!data.fullName.trim()) {
    return "Please enter your full name.";
  }

  if (!data.email.trim()) {
    return "Please enter your email address.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    return "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    return "Please enter your phone number.";
  }

  return null;
}