import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type SearchSliceState = {
  isSearchBottomSheetOpen: boolean;
  isSearchResultBottomSheetOpen: boolean;
};

const initialState: SearchSliceState = {
  isSearchBottomSheetOpen: false,
  isSearchResultBottomSheetOpen: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //search bottom sheet
    openSearchBottomSheet: (state) => {
      state.isSearchBottomSheetOpen = true;
    },
    closeSearchBottomSheet: (state) => {
      state.isSearchBottomSheetOpen = false;
    },
    //search result bottom sheet
    openSearchResultBottomSheet: (state) => {
      state.isSearchResultBottomSheetOpen = true;
    },
    closeSearchResultBottomSheet: (state) => {
      state.isSearchResultBottomSheetOpen = false;
    },
  },
});

export const getIsSearchBottomOpen = (state: RootState) =>
  state.search.isSearchBottomSheetOpen;
export const getIsSearchResultBottomOpen = (state: RootState) =>
  state.search.isSearchResultBottomSheetOpen;
export const {
  openSearchBottomSheet,
  closeSearchBottomSheet,
  openSearchResultBottomSheet,
  closeSearchResultBottomSheet,
} = searchSlice.actions;
export default searchSlice.reducer;
