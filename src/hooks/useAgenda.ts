import { useEffect, useState } from "react";
import { getAgenda } from "../services/agenda";
import type { Agenda } from "../types/agenda";

export function useAgenda() {
  const [agenda, setAgenda] = useState<Agenda | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAgenda();
        setAgenda(data);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    agenda,
    loading,
  };
}