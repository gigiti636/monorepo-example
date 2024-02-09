import { useState } from 'react';
import API from '@/api-client/API';
import type { ApiResponse } from '@/api-client/API';

const useGetRequestWithAbort = <T, Q>(
  onData: (_data: T) => void,
  url: string,
  params?: Q,
  headers?: Record<string, string>,
  displayError = false,
  abortOnNew = true,
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [abortController, setAbortController] = useState<AbortController | null>(null);

  const getData = async () => {
    if (abortOnNew && abortController) {
      abortController.abort();
    }

    setLoading(true);

    const controller = new AbortController();
    setAbortController(controller);

    const { data, error }: ApiResponse<T> = await API.get<T>(
      url,
      params,
      { ...headers },
      displayError,
      false,
      controller.signal,
    );

    if (data) {
      onData(data);
    }

    if (data || error) {
      setLoading(false);
    }
    setData(data || null);
    setError(error || null);
  };

  const abortRequest = () => {
    if (abortController) {
      abortController.abort();
      setLoading(false);
      setError(null);
    }
  };

  return { data, loading, error, getData, abortRequest };
};

export default useGetRequestWithAbort;
