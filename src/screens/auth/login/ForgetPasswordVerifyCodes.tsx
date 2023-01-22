import { View } from "react-native";
import React, { useCallback } from "react";
import { VerifyCodes } from "../../../components/auth";
import { RootScreenProps } from "../../../types/navigation";
import { ScreenLayout } from "../../../components/common";

const ForgetPasswordVerifyCodes = ({
  navigation,
}: RootScreenProps<"ForgetPasswordVerifyCodes">) => {
  const confirmCodes = useCallback(() => {
    //after the codes are confirmed by backend,
    //navigate to the change password screen.
    console.log("confirm codes");
    navigation.navigate("ChangePassword");
  }, [navigation]);
  return (
    <ScreenLayout header="Forget Password">
      <View>
        <VerifyCodes buttonTitle="Confirm" onPress={confirmCodes} />
      </View>
    </ScreenLayout>
  );
};

export default ForgetPasswordVerifyCodes;
