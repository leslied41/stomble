import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Group>
  );
};

export default AuthRoutes;
