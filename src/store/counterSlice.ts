import { createSlice } from '@reduxjs/toolkit';
import type { CounterState } from './types';

export const initialState: CounterState = {
  count: 0,
  isDisabled: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
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