import { useState } from "react";
import { submitRSVP } from "../api/rsvpApi";
import type { RSVPFormData } from "../types/rsvp";
import { validateRSVP } from "../validation/validateRSVP";
import { ApiError } from "../../../lib/api/errors";

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

  function resetState() {
    setLoading(false);
    setSuccess(false);
    setError(null);
  }

  async function submit() {
    resetState();

    const validationError = validateRSVP(form);

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await submitRSVP(form);

      if (!response.success) {
        throw new Error(response.message);
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ralat tidak dijangka. Sila cuba lagi.");
      }
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
    resetState,
  };
}