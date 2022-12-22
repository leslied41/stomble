import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGenderBottomSheetOpen: false,
  isBirthdayBottomSheetOpen: false,
  isBusinessBirthdayBottomSheetOpen: false,
  gender: "",
  birthday: "",
  business_birthday: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // gender bottom sheet
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
    //personal birthday bottom sheet
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
    //business birthday bottom sheet
    openBusinessBirthdayBottomSheet: (state) => {
      state.isBusinessBirthdayBottomSheetOpen = true;
    },
    closeBusinessBirthdayBottomSheet: (state) => {
      state.isBusinessBirthdayBottomSheetOpen = false;
    },
    setBusinessBirthday: (state, action) => {
      state.business_birthday = action.payload;
    },
    clearBusinessBirthday: (state) => {
      state.business_birthday = "";
    },
  },
});

export const getIsGenderBottomSheetOpen = (state) =>
  state.auth.isGenderBottomSheetOpen;
export const getIsBirthdayBottomSheetOpen = (state) =>
  state.auth.isBirthdayBottomSheetOpen;
export const getIsBusinessBirthdayBottomSheetOpen = (state) =>
  state.auth.isBusinessBirthdayBottomSheetOpen;
export const getGender = (state) => state.auth.gender;
export const getBirthday = (state) => state.auth.birthday;
export const getBusinessBirthday = (state) => state.auth.business_birthday;

export const {
  openGenderBottomSheet,
  closeGenderBottomSheet,
  setGender,
  clearGender,
  openBirthdayBottomSheet,
  closeBirthdayBottomSheet,
  setBirthday,
  clearBirthday,
  openBusinessBirthdayBottomSheet,
  closeBusinessBirthdayBottomSheet,
  setBusinessBirthday,
  clearBusinessBirthday,
} = authSlice.actions;
export default authSlice.reducer;
