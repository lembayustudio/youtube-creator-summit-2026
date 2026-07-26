import { useEffect, useState } from "react";
import { getFeaturedSpeakers } from "../services/featuredSpeakers";
import type { FeaturedSpeakers } from "../types/featuredSpeakers";

export function useFeaturedSpeakers() {
  const [featuredSpeakers, setFeaturedSpeakers] =
    useState<FeaturedSpeakers | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFeaturedSpeakers();
        setFeaturedSpeakers(data);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    featuredSpeakers,
    loading,
  };
}