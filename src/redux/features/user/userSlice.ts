import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type UserSliceState = {
  isUserBottomSheetOpen: boolean;
};

const initialState: UserSliceState = {
  isUserBottomSheetOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //search bottom sheet
    openUserBottomSheet: (state) => {
      state.isUserBottomSheetOpen = true;
    },
    closeUserBottomSheet: (state) => {
      state.isUserBottomSheetOpen = false;
    },
  },
});

export const getIsUserBottomOpen = (state: RootState) =>
  state.user.isUserBottomSheetOpen;
export const { openUserBottomSheet, closeUserBottomSheet } = userSlice.actions;
export default userSlice.reducer;
