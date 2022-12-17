import React from "react";
import {
  SearchScreen,
  SettingsScreen,
  UserScreen,
  VideoPlayScreen,
} from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomeRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="VideoPlay" component={VideoPlayScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
