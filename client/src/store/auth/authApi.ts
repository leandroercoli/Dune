import { api } from '../api/api'

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  token: string;
  userid: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
        validateStatus: (response, result) =>  response.status === 200 && result.token
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
