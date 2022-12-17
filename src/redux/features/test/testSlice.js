import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const getCount = (state) => state.test.count;
export const { increment, decrement, incrementByAmount } = testSlice.actions;
export default testSlice.reducer;
