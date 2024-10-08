import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fitness-420.vercel.app/api",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
