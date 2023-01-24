import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type UserSliceState = {
  isUserBusinessBottomSheetOpen: boolean;
  isSwitchAccountBottomSheetOpen: boolean;
  isRecommendedAccountBusinessBottomSheetOpen: boolean;
};

const initialState: UserSliceState = {
  isUserBusinessBottomSheetOpen: false,
  isSwitchAccountBottomSheetOpen: false,
  isRecommendedAccountBusinessBottomSheetOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //user business bottom sheet
    openUserBusinessBottomSheet: (state) => {
      state.isUserBusinessBottomSheetOpen = true;
    },
    closeUserBusinessBottomSheet: (state) => {
      state.isUserBusinessBottomSheetOpen = false;
    },
    //switch account bottom sheet
    openSwitchAccountBottomSheetOpen: (state) => {
      state.isSwitchAccountBottomSheetOpen = true;
    },
    closeSwitchAccountBottomSheetOpen: (state) => {
      state.isSwitchAccountBottomSheetOpen = false;
    },
    //recommended account business bottom sheet
    openRecommendedAccountBusinessBottomSheet: (state) => {
      state.isRecommendedAccountBusinessBottomSheetOpen = true;
    },
    closeRecommendedAccountBusinessBottomSheet: (state) => {
      state.isRecommendedAccountBusinessBottomSheetOpen = false;
    },
  },
});

export const getIsUserBusinessBottomOpen = (state: RootState) =>
  state.user.isUserBusinessBottomSheetOpen;
export const getIsSwitchAccountBottomSheetOpen = (state: RootState) =>
  state.user.isSwitchAccountBottomSheetOpen;
export const getIsRecommendedAccountBusinessBottomOpen = (state: RootState) =>
  state.user.isRecommendedAccountBusinessBottomSheetOpen;
export const {
  openUserBusinessBottomSheet,
  closeUserBusinessBottomSheet,
  openSwitchAccountBottomSheetOpen,
  closeSwitchAccountBottomSheetOpen,
  openRecommendedAccountBusinessBottomSheet,
  closeRecommendedAccountBusinessBottomSheet,
} = userSlice.actions;
export default userSlice.reducer;
