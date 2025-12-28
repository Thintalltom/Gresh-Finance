import  { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface CardState {
    cardPresent: boolean;
    transactionFilter?: boolean;
}

const initialState: CardState = {
    cardPresent: false,
    transactionFilter: false,
};


const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCardPresent(state, action: PayloadAction<boolean>) {
            state.cardPresent = action.payload;
        },
        setTransactionFilter(state, action: PayloadAction<boolean>) {
            state.transactionFilter = action.payload;
        }
    }
});

export const { setCardPresent, setTransactionFilter } = cardSlice.actions;
export default cardSlice.reducer;