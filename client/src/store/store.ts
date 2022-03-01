import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { api } from 'store/api/api'
import authReducer from 'store/auth/authSlice'
import profileReducer from 'store/profile/profileSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    profile: profileReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 

export default store;