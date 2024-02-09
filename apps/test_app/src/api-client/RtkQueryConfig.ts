import type { RootState } from "@/app/store";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const sharedApiQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state?.user?.access_token;
    const language = state?.client?.language;

    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    if (language) {
      headers.set("X-Preferred-Language", language);
    }
    return headers;
  },
});
