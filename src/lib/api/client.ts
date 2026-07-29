import { env } from "../config/env";
import { ApiError } from "./errors";

export async function apiClient<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${env.rsvpApiUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok || data.success === false) {
    throw new ApiError(
      data.message ?? "Request failed.",
      response.status,
      data.code
    );
  }

  return data;
}