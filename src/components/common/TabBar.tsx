import { View, Text } from "react-native";
import React, { FC } from "react";
import { useRoute } from "@react-navigation/native";
import { Octicons, FontAwesome5, Ionicons } from "@expo/vector-icons";

export type Props = { focused: boolean; size: number };

const TabBar: FC<Props> = ({ focused, size }) => {
  const route = useRoute();
  let iconName = "";
  let Icon: any;
  let text = "";
  size = 20;

  if (route.name === "VideoPlay") {
    iconName = "home";
    Icon = Octicons;
    text = "Home";
  } else if (route.name === "SearchRoutes") {
    iconName = "search";
    Icon = Octicons;
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

        {focused && (
          <Text className="text-[14px] leading-[17.5px] font-bold text-[#D6DFFF]">
            {text}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TabBar;
