import { useEffect, useState } from "react";
import { getFaq } from "../services/faq";
import type { Faq } from "../types/faq";

export function useFaq() {
  const [faq, setFaq] = useState<Faq | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFaq();
        setFaq(data);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    faq,
    loading,
  };
}