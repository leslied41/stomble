import { View, Text } from "react-native";
import React from "react";
import { AuthLayout, LoginForm } from "../../../components/auth";

const Login = ({ route }) => {
  const { title } = route.params;
  //this is because the login and signin screens are the same, besides the
  //title. so just pass the title in using navigation.

  return (
    <AuthLayout header={title}>
      <View className="flex-1 mt-[35px]">
        <LoginForm />
      </View>
    </AuthLayout>
  );
};

export default Login;
