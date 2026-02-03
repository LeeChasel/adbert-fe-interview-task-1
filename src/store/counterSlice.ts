import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isDisabled: boolean;
}

const initialState: CounterState = {
  count: 0,
  isDisabled: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // 邏輯保護
      if (!state.isDisabled) {
        state.count += 1;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
    toggleDisable: (state) => {
      state.isDisabled = !state.isDisabled;
    },
  },
});

export const { increment, reset, toggleDisable } = counterSlice.actions;
export default counterSlice.reducer;