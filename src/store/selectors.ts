import type { RootState } from './index';

export const selectCount = (state: RootState) => state.counter.count;

export const selectIsDisabled = (state: RootState) => state.counter.isDisabled;
