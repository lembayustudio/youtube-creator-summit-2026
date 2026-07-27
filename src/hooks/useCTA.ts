import { useEffect, useState } from "react";
import { getCTA } from "../services/cta";
import type { CTA } from "../types/cta";

export function useCTA() {
  const [cta, setCTA] = useState<CTA | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCTA();
        setCTA(data);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    cta,
    loading,
  };
}