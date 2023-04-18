import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ramApi = createApi({
  reducerPath: 'ramApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    getByName: build.query({
      query: (query: string) => `/?${query}`,
    }),
    getById: build.query({
      query: (id: number) => `/${id}`,
    }),
  }),
});

export const { useGetByNameQuery, useGetByIdQuery } = ramApi;
