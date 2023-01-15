import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikedScreen from "./Liked";
import FollowingScreen from "./Following";
import HistoryScreen from "./History";
import { TabBar } from "../../components/user/common";

const Tab = createMaterialTopTabNavigator<ReactNavigation.UserParamList>();

function UserRoutes() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: "#000000" }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#222222",
          height: 81,
          borderColor: "red",
          borderWidth: 1,
        },
        tabBarContentContainerStyle: {
          borderColor: "white",
          borderWidth: 1,
        },
        tabBarItemStyle: { borderColor: "white", borderWidth: 1 },
        tabBarInactiveTintColor: "#5C5C5C",
        tabBarActiveTintColor: "white",
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Following" component={FollowingScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}

export default UserRoutes;
