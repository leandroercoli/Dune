import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from 'store/store'
import { PlanetCollection } from 'data-types/planet';
import { User } from 'data-types/user';

export const TAG_USER = "User"
export const TAG_PLANETS = "Planets"
export const TAG_CONTACTS = "Contacts"

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', token)
      }
  
      return headers
    },
  }),
  tagTypes: [TAG_USER, TAG_PLANETS, TAG_CONTACTS],
  endpoints: (builder) => ({
    getUser: builder.query<{user: User}, string>({
      query: (id) => ({ url: `user/${id}` }),
      providesTags: [TAG_USER]
    }),
    getPlanets: builder.query<PlanetCollection, null>({
      query: () => ({ url: 'homepage/planets' }),
      providesTags: [TAG_PLANETS]
    }),
    getContacts: builder.query<User[], number>({
      query: (id) => ({ url: `homepage/contacts/${id}` }),
      providesTags: [TAG_CONTACTS]
    }),
  }),
})

export const { 
  useGetUserQuery,
  useGetPlanetsQuery,
  useGetContactsQuery,
} = api
