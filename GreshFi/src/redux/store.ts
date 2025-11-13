import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './slice/CountrySlice';
export const store = configureStore({
  reducer: {
    Country: CountryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;