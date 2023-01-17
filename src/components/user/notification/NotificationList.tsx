import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";

type ItemProps = { title: string; index: number };
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title, index }: ItemProps) => (
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

const NotificationList = () => {
  return (
    <View className=" flex-1">
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <Item title={item.title} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NotificationList;
