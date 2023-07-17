import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LimitState {
  limit: number;
}

const initialState: LimitState = {
  limit: 5,
};

export const limitSlice = createSlice({
  name: "limit",
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setLimit } = limitSlice.actions;

export default limitSlice.reducer;
