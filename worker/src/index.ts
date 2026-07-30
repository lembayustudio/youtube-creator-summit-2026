export interface Env {
  APPS_SCRIPT_URL: string;
  ALLOWED_ORIGINS: string;
}

interface RSVPRequest {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
}

function getAllowedOrigins(env: Env): string[] {
  return env.ALLOWED_ORIGINS.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function getCorsHeaders(origin: string | null, env: Env) {
  const allowedOrigins = getAllowedOrigins(env);

  const allowOrigin =
    origin && allowedOrigins.includes(origin)
      ? origin
      : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function createHeaders(
  corsHeaders: Record<string, string>,
  contentType = "application/json"
) {
  return {
    ...corsHeaders,
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "DENY",
  };
}

function validatePayload(payload: RSVPRequest): string | null {
  if (!payload.fullName?.trim()) {
    return "Nama diperlukan.";
  }

  if (!payload.email?.trim()) {
    return "Email diperlukan.";
  }

  if (!payload.phone?.trim()) {
    return "No. telefon diperlukan.";
  }

  return null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const corsHeaders = getCorsHeaders(origin, env);

    // Handle preflight request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: createHeaders(corsHeaders),
      });
    }

    try {
      // Health check
      if (request.method === "GET") {
        const response = await fetch(env.APPS_SCRIPT_URL);
        const body = await response.text();

        return new Response(body, {
          status: response.status,
          headers: createHeaders(corsHeaders),
        });
      }

      // RSVP submission
      if (request.method === "POST") {
        const payload = (await request.json()) as RSVPRequest;

        const error = validatePayload(payload);

        if (error) {
          return Response.json(
            {
              success: false,
              code: "VALIDATION_ERROR",
              message: error,
            },
            {
              status: 400,
              headers: createHeaders(corsHeaders),
            }
          );
        }

        const response = await fetch(env.APPS_SCRIPT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const body = await response.text();

        return new Response(body, {
          status: response.status,
          headers: createHeaders(corsHeaders),
        });
      }

      return Response.json(
        {
          success: false,
          message: "Method not allowed.",
        },
        {
          status: 405,
          headers: createHeaders(corsHeaders),
        }
      );
    } catch (error) {
      return Response.json(
        {
          success: false,
          message: "Worker failed to reach Apps Script.",
          error: error instanceof Error ? error.message : "Unknown error",
        },
        {
          status: 500,
          headers: createHeaders(corsHeaders),
        }
      );
    }
  },
};