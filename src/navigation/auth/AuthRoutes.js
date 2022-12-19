import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  RegisterScreen,
  LandingScreen,
  LandingWithAccountsScreen,
  ChooseAccountTypeScreen,
} from "../../screens";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  //this is to fake if are there accounts stored in localstorage
  const existAccounts = false;
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Landing"
        component={existAccounts ? LandingWithAccountsScreen : LandingScreen}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="ChooseAccountType"
        component={ChooseAccountTypeScreen}
      />
    </Stack.Group>
  );
};

export default AuthRoutes;
