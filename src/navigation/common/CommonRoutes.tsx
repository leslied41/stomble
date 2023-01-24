import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NotificationScreen,
  FullNameScreen,
  PersonalInfoScreen,
  RecommendAccountsScreen,
} from "../../screens";

const Stack = createNativeStackNavigator<ReactNavigation.CommonParamList>();

const CommonRoutes = () => {
  return (
    <>
      {/* settings */}
      {/* the reason why settings screen goes here is because they are outside
      of tab navigation. */}
      <Stack.Group>
        {/* settings screen */}
        <Stack.Screen name="FullName" component={FullNameScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        {/* user screens */}
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecommendAccounts"
          component={RecommendAccountsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </>
  );
};

export default CommonRoutes;
