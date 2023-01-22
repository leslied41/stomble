import { View } from "react-native";
import React from "react";
import { LoginForm } from "../../../components/auth";
import { RootScreenProps } from "../../../types/navigation";
import { ScreenLayout } from "../../../components/common";

const Login = ({ route }: RootScreenProps<"Login">) => {
  const { title } = route.params;
  //this is because the login and signin screens are the same, besides the
  //title. so just pass the title in using navigation.

  return (
    <ScreenLayout header={title}>
      <View className="flex-1 mt-[35px]">
        <LoginForm />
      </View>
    </ScreenLayout>
  );
};

export default Login;
