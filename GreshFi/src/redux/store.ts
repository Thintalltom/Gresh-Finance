import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './slice/CountrySlice';
import LimitReducer from './slice/LimitSlice';
import CardReducer from './slice/CardSlice';
export const store = configureStore({
  reducer: {
    Country: CountryReducer,
    Limit: LimitReducer,
    Card: CardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;