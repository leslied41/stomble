import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchBottomSheetOpen: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    //bottom sheet
    openSearchBottomSheet: (state) => {
      state.isSearchBottomSheetOpen = true;
    },
    closeSearchBottomSheet: (state) => {
      state.isSearchBottomSheetOpen = false;
    },
  },
});

export const getIsSearchBottomOpen = (state) =>
  state.search.isSearchBottomSheetOpen;
export const { openSearchBottomSheet, closeSearchBottomSheet } =
  searchSlice.actions;
export default searchSlice.reducer;
