import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  LoginVerifyCodesScreen,
  PersonalRegisterScreen,
  BusinessRegisterScreen,
  LandingScreen,
  LandingWithAccountsScreen,
  ChooseAccountTypeScreen,
  PersonalRegisterVerifyCodesScreen,
  BusinessRegisterVerifyCodesScreen,
  ForgetPasswordVerifyCodesScreen,
  ChangePasswordScreen,
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
      <Stack.Screen
        name="LoginVerifyCodes"
        component={LoginVerifyCodesScreen}
      />
      <Stack.Screen
        name="ForgetPasswordVerifyCodes"
        component={ForgetPasswordVerifyCodesScreen}
      />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen
        name="PersonalRegister"
        component={PersonalRegisterScreen}
      />
      <Stack.Screen
        name="BusinessRegister"
        component={BusinessRegisterScreen}
      />
      <Stack.Screen
        name="ChooseAccountType"
        component={ChooseAccountTypeScreen}
      />
      <Stack.Screen
        name="PersonalRegisterVerifyCodes"
        component={PersonalRegisterVerifyCodesScreen}
      />
      <Stack.Screen
        name="BusinessRegisterVerifyCodes"
        component={BusinessRegisterVerifyCodesScreen}
      />
    </Stack.Group>
  );
};

export default AuthRoutes;
