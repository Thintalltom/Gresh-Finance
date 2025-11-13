import  { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface CountryState {
  selectedCountry: string;
  registrationNumber: string;
  Otp: string
}

const initialState: CountryState = {
  selectedCountry: '',
  registrationNumber: '',
  Otp: ''
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSelectedCountry(state, action: PayloadAction<string>) {
      state.selectedCountry = action.payload;
    },
    setRegistrationNumber(state, action: PayloadAction<string>) {
        state.registrationNumber = action.payload;
    },
    setOtp(state, action: PayloadAction<string>){
        state.Otp = action.payload
    }
    },
});

export const { setSelectedCountry, setRegistrationNumber, setOtp } = countrySlice.actions;
export default countrySlice.reducer;