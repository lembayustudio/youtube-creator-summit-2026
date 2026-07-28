import { useState } from "react";
import type { RSVPFormData } from "../types/rsvp";
import { validateRSVP } from "../validation/validateRSVP";

const initialForm: RSVPFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
};

export function useRSVP() {
  const [form, setForm] = useState<RSVPFormData>(initialForm);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof RSVPFormData>(
    field: K,
    value: RSVPFormData[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (error) {
      setError(null);
    }
  }

  async function submit() {
    const validationError = validateRSVP(form);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSuccess(true);

      setForm(initialForm);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return {
    form,
    loading,
    success,
    error,
    updateField,
    submit,
  };
}