import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type AuthSliceState = {
  isGenderBottomSheetOpen: boolean;
  isBirthdayBottomSheetOpen: boolean;
  isBusinessBirthdayBottomSheetOpen: boolean;
  isLoginBottomSheetOpen: boolean;
  gender: string;
  birthday: string;
  business_birthday: string;
  //authentication
  currentUser: string | null;
};

const initialState: AuthSliceState = {
  isGenderBottomSheetOpen: false,
  isBirthdayBottomSheetOpen: false,
  isBusinessBirthdayBottomSheetOpen: false,
  isLoginBottomSheetOpen: false,
  gender: "",
  birthday: "",
  business_birthday: "",
  currentUser: "null",
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
    setGender: (state, action: PayloadAction<string>) => {
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
    setBirthday: (state, action: PayloadAction<string>) => {
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
    setBusinessBirthday: (state, action: PayloadAction<string>) => {
      state.business_birthday = action.payload;
    },
    clearBusinessBirthday: (state) => {
      state.business_birthday = "";
    },
    //login multiple accounts bottom sheet
    openLoginBottomSheet: (state) => {
      state.isLoginBottomSheetOpen = true;
    },
    closeLoginBottomSheet: (state) => {
      state.isLoginBottomSheetOpen = false;
    },
    //authentication
    setCredentials: (state, action) => {
      const { user } = action.payload;
      state.currentUser = user;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const getIsGenderBottomSheetOpen = (state: RootState) =>
  state.auth.isGenderBottomSheetOpen;
export const getIsBirthdayBottomSheetOpen = (state: RootState) =>
  state.auth.isBirthdayBottomSheetOpen;
export const getIsBusinessBirthdayBottomSheetOpen = (state: RootState) =>
  state.auth.isBusinessBirthdayBottomSheetOpen;
export const getIsLoginBottomSheetOpen = (state: RootState) =>
  state.auth.isLoginBottomSheetOpen;
export const getGender = (state: RootState) => state.auth.gender;
export const getBirthday = (state: RootState) => state.auth.birthday;
export const getBusinessBirthday = (state: RootState) =>
  state.auth.business_birthday;
//auth
export const getCurrentUser = (state: RootState) => state.auth.currentUser;

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
  openLoginBottomSheet,
  closeLoginBottomSheet,
  //authentication
  setCredentials,
  logOut,
} = authSlice.actions;
export default authSlice.reducer;
