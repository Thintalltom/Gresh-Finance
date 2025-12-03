import  { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LimitState {
  spendingLimit: string;
}

const initialState: LimitState = {
  spendingLimit: '',
};

const limitSlice = createSlice({
  name: 'limit',
  initialState,
    reducers: {
    setSpendingLimit(state, action: PayloadAction<string>) {
      state.spendingLimit = action.payload;
    }
    },
});

export const { setSpendingLimit } = limitSlice.actions;
export default limitSlice.reducer;