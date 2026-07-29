import { apiClient } from "../../../lib/api/client";

export interface RSVPRequest {
  fullName: string;
  email: string;
  phone: string;
  organisation?: string;
  creatorChannel?: string;
  subscriberCount?: string;
}

export interface RSVPResponse {
  success: boolean;
  message: string;
  registrationId?: string;
}

export async function submitRSVP(
  payload: RSVPRequest
): Promise<RSVPResponse> {
  return apiClient<RSVPResponse>("", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}