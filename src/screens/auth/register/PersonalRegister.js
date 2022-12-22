import { View, Text } from "react-native";
import React from "react";
import {
  AuthLayout,
  PersonalRegisterForm,
  BottomSheetLayout,
  GenderInputBottomSheet,
  BirthdayInputBottomSheet,
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
        <BirthdayInputBottomSheet />
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
