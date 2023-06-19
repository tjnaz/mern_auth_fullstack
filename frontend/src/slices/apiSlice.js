import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // uses RTK query

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
