import React from "react";
import {
  SearchScreen,
  SettingsScreen,
  UserScreen,
  VideoPlayScreen,
} from "../../screens";
import { TabBar } from "../../components/common";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<ReactNavigation.HomeParamList>();

const HomeRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#222222",
          height: 91,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => TabBar({ focused, size }),
      })}
    >
      <Tab.Screen name="VideoPlay" component={VideoPlayScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
