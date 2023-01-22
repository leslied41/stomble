import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type UserSliceState = {
  isUserBusinessBottomSheetOpen: boolean;
  isSwitchAccountBottomSheetOpen: boolean;
};

const initialState: UserSliceState = {
  isUserBusinessBottomSheetOpen: false,
  isSwitchAccountBottomSheetOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //business bottom sheet
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
  },
});

export const getIsUserBusinessBottomOpen = (state: RootState) =>
  state.user.isUserBusinessBottomSheetOpen;
export const getIsSwitchAccountBottomSheetOpen = (state: RootState) =>
  state.user.isSwitchAccountBottomSheetOpen;
export const {
  openUserBusinessBottomSheet,
  closeUserBusinessBottomSheet,
  openSwitchAccountBottomSheetOpen,
  closeSwitchAccountBottomSheetOpen,
} = userSlice.actions;
export default userSlice.reducer;
