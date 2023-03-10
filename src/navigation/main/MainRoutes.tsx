import React from "react";
import { HomeRoutes } from "../home";
import { AuthRoutes } from "../auth";
import { CommonRoutes } from "../common";
import { getCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/store";
//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<ReactNavigation.RootParamList>();

const MainRoutes = () => {
  let isLoggedIn = useAppSelector(getCurrentUser) !== null;

  // this routes is to hold all the routes and determine which
  //route to be available according to if user has logged in.
  //follow this documentation,https://reactnavigation.org/docs/nesting-navigators/#best-practices-when-nesting

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
          AuthRoutes()
        )}

        {CommonRoutes()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
