import { View } from "react-native";
import React from "react";
import {
  AuthLayout,
  PersonalRegisterForm,
  BottomSheetLayout,
  GenderInputBottomSheet,
  PersonalBirthdayBottomSheet,
} from "../../../components/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsGenderBottomSheetOpen,
  closeGenderBottomSheet,
  getIsBirthdayBottomSheetOpen,
  closeBirthdayBottomSheet,
} from "../../../redux/features/auth/authSlice";

const PersonalRegister = () => {
  const isGenderBottomSheetOpen = useSelector(getIsGenderBottomSheetOpen);
  const isBirthdayBottomSheetOpen = useSelector(getIsBirthdayBottomSheetOpen);

  const dispatch = useDispatch();
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
      >
        <GenderInputBottomSheet />
      </BottomSheetLayout>

      {/* birthday bottom sheet */}
      <BottomSheetLayout
        snapPoint="40%"
        isBottomSheetOpen={isBirthdayBottomSheetOpen}
        closeBottomSheet={() => dispatch(closeBirthdayBottomSheet())}
      >
        <PersonalBirthdayBottomSheet />
      </BottomSheetLayout>

      <AuthLayout header="Personal register">
        <View className="flex-1 mt-[35px]">
          <PersonalRegisterForm />
        </View>
      </AuthLayout>
    </>
  );
};

export default PersonalRegister;
