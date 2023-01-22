import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type FeedBottomSheetView =
  | "FeedShare"
  | "FeedReadMore"
  | "BrandInfo"
  | "FeedMoreOptions"
  | "FeedReportVideo"
  | "FeedThanksReport"
  | undefined;

type FeedSliceState = {
  feedBottomSheetView: FeedBottomSheetView;
};

const initialState: FeedSliceState = {
  feedBottomSheetView: undefined,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState: initialState,
  reducers: {
    setFeedBottomSheetView: (
      state,
      action: PayloadAction<FeedBottomSheetView>
    ) => {
      state.feedBottomSheetView = action.payload;
    },
  },
});

export const getFeedBottomSheetView = (state: RootState) =>
  state.feed.feedBottomSheetView;
export const { setFeedBottomSheetView } = feedSlice.actions;
export default feedSlice.reducer;
