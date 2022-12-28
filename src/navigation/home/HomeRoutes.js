import { View, Text } from "react-native";
import React from "react";
import {
  SearchScreen,
  SettingsScreen,
  UserScreen,
  VideoPlayScreen,
} from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, FontAwesome5, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#222222",
          height: 91,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let Icon = Octicons;
          let text = "";
          size = 20;

          if (route.name === "VideoPlay") {
            iconName = "home";
            text = "Home";
          } else if (route.name === "Search") {
            iconName = "search";
            text = "Discover";
          } else if (route.name === "User") {
            iconName = "user-circle";
            Icon = FontAwesome5;
            text = "Profile";
          } else if (route.name === "Settings") {
            iconName = "menu";
            Icon = Ionicons;
            text = "Menu";
          }

          return (
            <View
              className="p-[10px] rounded-[100px]"
              style={{
                backgroundColor: focused ? "#326FCB" : "transparent",
              }}
            >
              <View className="flex-row items-center">
                <View className="mr-[10px]">
                  <Icon
                    name={iconName}
                    size={size}
                    color={focused ? "#D6DFFF" : "#ABABAB"}
                  />
                </View>

                <Text
                  className="text-[14px] leading-[17.5px] font-bold text-[#D6DFFF]"
                  style={{ display: focused ? "block" : "none" }}
                >
                  {text}
                </Text>
              </View>
            </View>
          );
        },
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
