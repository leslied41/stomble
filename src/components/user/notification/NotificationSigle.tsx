import { View, Text, Image, Pressable } from "react-native";
import React from "react";

type NotificationSigleProps = { title: string; index: number };

const NotificationSigle = ({ title, index }: NotificationSigleProps) => (
  <View
    className="flex-row justify-between items-center"
    style={{ marginTop: index === 0 ? 0 : 36 }}
  >
    <Pressable
      style={{
        width: 47.95,
        height: 47.95,
        borderRadius: 47.95 / 2,
        overflow: "hidden",
      }}
    >
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/southpark/images/c/c2/Butters_%28Facebook%29.jpg/revision/latest/scale-to-width-down/720?cb=20101010032409",
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </Pressable>

    <View className="flex-1 ml-[14.39px]">
      <View>
        <Text className="text-[11.51px] leading-[13.81px] text-white font-normal ">
          Lorem ipsum dolor sit amet, consecte adipiscing elit.
        </Text>
      </View>
      <View className="flex-row justify-between flex-1">
        <Text className="text-[11.51px] leading-[13.81px] text-[#ABABAB] font-normal">
          @HotelSurryHill
        </Text>
        <Text className="text-[11.51px] leading-[13.81px] text-[#6C6C6C] font-normal">
          1m ago
        </Text>
      </View>
    </View>

    <View className="ml-[21px] h-[18.22px] w-[18.22px] rounded-[9.11px] bg-[#F84135] justify-center items-center">
      <Text className="text-[9.59px] leading-[12.08px] font-bold text-white">
        2
      </Text>
    </View>
  </View>
);

export default NotificationSigle;
