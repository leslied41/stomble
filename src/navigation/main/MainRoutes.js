import React from "react";
import { HomeRoutes } from "../home";
import { AuthRoutes } from "../auth";
import { CommonRoutes } from "../common";
//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeRoutes}
            options={{ headerShown: false }}
          />
        ) : (
          AuthRoutes({})
        )}

        {CommonRoutes({})}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
