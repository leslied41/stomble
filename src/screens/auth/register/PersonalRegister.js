import { View, Text } from "react-native";
import React from "react";
import {
  AuthLayout,
  PersonalRegisterForm,
  BottomSheetLayout,
  GenderInputBottomSheet,
} from "../../../components/auth";

const PersonalRegister = () => {
  return (
    <>
      <BottomSheetLayout>
        <GenderInputBottomSheet />
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
