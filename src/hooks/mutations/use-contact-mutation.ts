"use client";

import { useState } from "react";
import { submitContactForm } from "@/services/portfolio-service";
import type { ContactSubmissionPayload } from "@/types/portfolio";

type SubmitResponse = Awaited<ReturnType<typeof submitContactForm>>;

export function useContactMutation() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<SubmitResponse | undefined>();
  const [error, setError] = useState<Error | null>(null);

  const mutateAsync = async (values: ContactSubmissionPayload) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    try {
      const response = await submitContactForm(values);
      setData(response);
      setIsSuccess(true);
      return response;
    } catch (caughtError) {
      const nextError =
        caughtError instanceof Error
          ? caughtError
          : new Error("Message delivery failed. Retry in a moment.");
      setError(nextError);
      throw nextError;
    } finally {
      setIsPending(false);
    }
  };

  return {
    mutateAsync,
    isPending,
    isSuccess,
    error,
    data,
    isError: error !== null,
  };
}
