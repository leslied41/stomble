import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBottomSheetOpen: false,
  gender: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openBottomSheet: (state) => {
      state.isBottomSheetOpen = true;
    },
    closeBottomSheet: (state) => {
      state.isBottomSheetOpen = false;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    clearGender: (state) => {
      state.gender = "";
    },
  },
});

export const getIsBottomSheetOpen = (state) => state.auth.isBottomSheetOpen;
export const getGender = (state) => state.auth.gender;
export const { openBottomSheet, closeBottomSheet, setGender, clearGender } =
  authSlice.actions;
export default authSlice.reducer;
