import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AboutScreen, AcknowledgeDeleteScreen, BirthdayScreen, ChangeEmailScreen, ChangePasswordScreen, ChangePhoneScreen, ContactUsScreen, DeleteAccountScreen, DeleteSuccessScreen, FullNameScreen, GenderScreen, NewPasswordScreen, NotificationScreen, OpenSourceLibrary, PasswordScreen, PersonalInfo, PrivacyPolicyScreen, SecurityScreen, SettingNotificationsScreen, TermsScreen, VerifyNewContactScreen, } from "../../screens";

import { VerifyScreen } from "../../components/settings";

const Stack = createNativeStackNavigator<ReactNavigation.CommonParamList>();

const CommonRoutes = () => {
  return (
    <>
      {/* settings */}
      {/* the reason why settings screen goes here is because they are outside
      of tab navigation. */}
      <Stack.Group>
        <Stack.Screen name="FullName" component={FullNameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }} />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingNotification"
          component={SettingNotificationsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gender"
          component={GenderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Birthday"
          component={BirthdayScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="VerifyScreen"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeEmail"
          component={ChangeEmailScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="VeryfyNewContact"
          component={VerifyNewContactScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChangePhone"
          component={ChangePhoneScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AcknowledgeDelete"
          component={AcknowledgeDeleteScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DeleteSuccess"
          component={DeleteSuccessScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Security"
          component={SecurityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurrentPassword"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Terms"
          component={TermsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OpenSourceLibrary"
          component={OpenSourceLibrary}
          options={{ headerShown: false }}
        />

      </Stack.Group>


    </>
  );
};

export default CommonRoutes;
