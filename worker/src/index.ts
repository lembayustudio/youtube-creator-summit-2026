export interface Env {
  APPS_SCRIPT_URL: string;
}

const allowedOrigins = [
  "http://localhost:5173",
  "https://youtube-creator-summit-2026.vercel.app",
];

function getCorsHeaders(origin: string | null) {
  return {
    "Access-Control-Allow-Origin":
      origin && allowedOrigins.includes(origin)
        ? origin
        : allowedOrigins[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function validatePayload(payload: any): string | null {
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
    const corsHeaders = getCorsHeaders(origin);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    try {
      // GET request
      if (request.method === "GET") {
        const response = await fetch(env.APPS_SCRIPT_URL);
        const body = await response.text();

        return new Response(body, {
          status: response.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      // POST request
      if (request.method === "POST") {
        const payload = await request.json();

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
              headers: corsHeaders,
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
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }

      return Response.json(
        {
          success: false,
          message: "Method not allowed.",
        },
        {
          status: 405,
          headers: corsHeaders,
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
          headers: corsHeaders,
        }
      );
    }
  },
};