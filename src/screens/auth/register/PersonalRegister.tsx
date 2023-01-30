import { View } from "react-native";
import React from "react";
import {
  PersonalRegisterForm,
  GenderInputBottomSheet,
  PersonalBirthdayBottomSheet,
} from "../../../components/auth";
import { BottomSheetLayout, ScreenLayout } from "../../../components/common";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  getIsGenderBottomSheetOpen,
  closeGenderBottomSheet,
  getIsBirthdayBottomSheetOpen,
  closeBirthdayBottomSheet,
} from "../../../redux/features/auth/authSlice";

const PersonalRegister = () => {
  const isGenderBottomSheetOpen = useAppSelector(getIsGenderBottomSheetOpen);
  const isBirthdayBottomSheetOpen = useAppSelector(
    getIsBirthdayBottomSheetOpen
  );

  const dispatch = useAppDispatch();
  return (
    <>
      {/* gender bottom sheet */}
      {/* the reason why BottomSheetLayout goes here instead of inside the components that nested
      into AuthLayout is because in AuthLayout, absolute position is used, and in order to
      properly display BottomSheet, the parent should be 100% height, then BottomSheet's height
      can be percentage of the 100% height, and so we need to use absolute postion to make BottomSheetLayout
      to be 100% height of viewport.  */}
      <BottomSheetLayout
        isBottomSheetOpen={isGenderBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeGenderBottomSheet())}
        variant="auth"
        snapPoint="30%"
      >
        <GenderInputBottomSheet />
      </BottomSheetLayout>

      {/* birthday bottom sheet */}
      <BottomSheetLayout
        snapPoint="40%"
        isBottomSheetOpen={isBirthdayBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeBirthdayBottomSheet())}
        variant="auth"
      >
        <PersonalBirthdayBottomSheet />
      </BottomSheetLayout>

      <ScreenLayout header="Personal register" >
        <View className="flex-1 mt-[35px]">
          <PersonalRegisterForm />
        </View>
      </ScreenLayout>
    </>
  );
};

export default PersonalRegister;
