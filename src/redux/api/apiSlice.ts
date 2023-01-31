import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://s3c5ftmfva.execute-api.ap-southeast-2.amazonaws.com/dev",
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});
/**
 * create apislcie, and then use injectendpoints to
 * put differnet endpoint inside this apislice, it is
 * to split code.
 */
