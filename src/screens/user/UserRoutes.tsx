import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikedScreen from "./Liked";
import FollowingScreen from "./Following";
import { TabBar } from "../../components/user/common";
import { DeleteBar } from "../../components/user";
import { View } from "react-native";

const Tab = createMaterialTopTabNavigator<ReactNavigation.UserParamList>();

function UserRoutes() {
  const [deleteOn, setDeleteOn] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Array<number | string>>(
    []
  );
  return (
    <View className="flex-1">
      <View className="flex-1 mx-[17px]">
        <Tab.Navigator
          sceneContainerStyle={{ backgroundColor: "#000000" }}
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
          <Tab.Screen name="Liked">
            {(props) => (
              <LikedScreen
                {...props}
                deleteOn={deleteOn}
                setDeleteOn={setDeleteOn}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Following" component={FollowingScreen} />
        </Tab.Navigator>
      </View>
      {/* the reason why put DeleteBar here is because it need to fill the screen */}
      {deleteOn && (
        <DeleteBar
          setDeleteOn={setDeleteOn}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}
    </View>
  );
}

export default UserRoutes;
