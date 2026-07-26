import { useEffect, useState } from "react";
import { getSpeakers } from "../services/speaker";
import type { Speaker } from "../types/speaker";

export function useSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadSpeakers() {
      try {
        const data = await getSpeakers();
        setSpeakers(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadSpeakers();
  }, []);

  return {
    speakers,
    loading,
    error,
  };
}