import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type FeedSliceState = {};

const initialState: FeedSliceState = {};

export const feedSlice = createSlice({
  name: "feed",
  initialState: initialState,
  reducers: {},
});

export default feedSlice.reducer;
