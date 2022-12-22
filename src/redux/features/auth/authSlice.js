import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGenderBottomSheetOpen: false,
  gender: "",
  birthday: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openGenderBottomSheet: (state) => {
      state.isGenderBottomSheetOpen = true;
    },
    closeGenderBottomSheet: (state) => {
      state.isGenderBottomSheetOpen = false;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    clearGender: (state) => {
      state.gender = "";
    },
    openBirthdayBottomSheet: (state) => {
      state.isBirthdayBottomSheetOpen = true;
    },
    closeBirthdayBottomSheet: (state) => {
      state.isBirthdayBottomSheetOpen = false;
    },
    setBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    clearBirthday: (state) => {
      state.birthday = "";
    },
  },
});

export const getIsGenderBottomSheetOpen = (state) =>
  state.auth.isGenderBottomSheetOpen;
export const getIsBirthdayBottomSheetOpen = (state) =>
  state.auth.isBirthdayBottomSheetOpen;
export const getGender = (state) => state.auth.gender;
export const getBirthday = (state) => state.auth.birthday;
export const {
  openGenderBottomSheet,
  closeGenderBottomSheet,
  setGender,
  clearGender,
  openBirthdayBottomSheet,
  closeBirthdayBottomSheet,
  setBirthday,
  clearBirthday,
} = authSlice.actions;
export default authSlice.reducer;
