import { useEffect, useState } from "react";
import { getHighlights } from "../services/highlights";
import type { Highlights } from "../types/highlights";

export function useHighlights() {
  const [highlights, setHighlights] = useState<Highlights | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHighlights();
        setHighlights(data);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    highlights,
    loading,
  };
}