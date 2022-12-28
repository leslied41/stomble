import { View, Text } from "react-native";
import React from "react";
import { AuthLayout, ChangePasswordForm } from "../../../components/auth";

const ChangePassword = () => {
  return (
    <AuthLayout header="Forget password">
      <View className="mt-[22px]">
        <Text className="text-[16px] leading-[19.2px] font-bold text-white ">
          Change password
        </Text>
        <Text className="mt-[15px] text-[14px] leading-[16.8px] font-medium text-white">
          Please change your password, you can log in again after the change is
          completed
        </Text>
      </View>

      <View className="mt-[23px]">
        <ChangePasswordForm />
      </View>
    </AuthLayout>
  );
};

export default ChangePassword;
