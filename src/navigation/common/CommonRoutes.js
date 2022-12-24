import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FullNameScreen, PersonalInfoScreen } from "../../screens/settings";
const Stack = createNativeStackNavigator();

const CommonRoutes = () => {
  return (
    <>
      {/* settings */}
      {/* the reason why settings screen goes here is because they are outside
      of tab navigation. */}
      <Stack.Group>
        <Stack.Screen name="FullName" component={FullNameScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      </Stack.Group>
    </>
  );
};

export default CommonRoutes;
