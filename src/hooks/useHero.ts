import { useEffect, useState } from "react";
import { getHero } from "../services/hero";
import type { Hero } from "../types/hero";

export function useHero() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadHero() {
      try {
        const data = await getHero();
        setHero(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadHero();
  }, []);

  return {
    hero,
    loading,
    error,
  };
}