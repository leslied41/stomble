import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { AuthLayout, VerifyCodes } from "../../../components/auth";

const ForgetPasswordVerifyCodes = ({ navigation }) => {
  const confirmCodes = useCallback(() => {
    //after the codes are confirmed by backend,
    //navigate to the change password screen.
    console.log("confirm codes");
    navigation.navigate("ChangePassword");
  }, []);
  return (
    <AuthLayout header="Forget Password">
      <View>
        <VerifyCodes buttonTitle="Confirm" onPress={confirmCodes} />
      </View>
    </AuthLayout>
  );
};

export default ForgetPasswordVerifyCodes;
