import { useEffect, useState } from "react";
import { getSpeakerSection } from "../services/speakerSection";
import type { SpeakerSection } from "../types/speakerSection";

export function useSpeakerSection() {
  const [section, setSection] = useState<SpeakerSection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getSpeakerSection();

      setSection(data);
      setLoading(false);
    }

    load();
  }, []);

  return {
    section,
    loading,
  };
}