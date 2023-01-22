import { View, Text } from "react-native";
import React from "react";
import { NotificationIcon } from "../../svg";

const NoContent = () => {
  return (
    <View>
      <View className="items-center">
        <Text className="text-[16px] leading-[19.2px] font-medium text-white">
          There are no new notifications to
        </Text>
        <Text className="text-[16px] leading-[19.2px] font-medium text-white">
          share with you
        </Text>
      </View>

      <View className="mt-[46px] items-center">
        <NotificationIcon />
      </View>
    </View>
  );
};

export default NoContent;
