import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";

type ItemProps = {
  title: string;
  subTitle: string;
  image: string;
  id: string;
  index: number;
};

const Item = ({ title, subTitle, index }: ItemProps) => (
  <View
    className="flex-row flex-1 justify-between items-center"
    style={{ marginTop: index === 0 ? 0 : 15 }}
  >
    <View className="flex-row">
      <Image
        source={require("../../../../assets/images/user/test.png")}
        style={{
          width: 40.7,
          height: 40.7,
          borderRadius: 40.7 / 2,
          borderWidth: 1,
          borderColor: "#fff",
        }}
      />
      <View className="ml-[9px]">
        <Text className="text-[11.76px] leading-[19.9px] font-bold text-white ">
          {title}
        </Text>
        <Text className="text-[10.85px] leading-[19.9px] font-medium text-[#ABABAB]">
          {subTitle}
        </Text>
      </View>
    </View>
    <TouchableOpacity className="w-[65px] h-[21px] rounded-[5px] bg-[#326FCB] justify-center items-center">
      <Text className="text-[10.85px] leading-[19.9px] font-bold text-white">
        Following
      </Text>
    </TouchableOpacity>
  </View>
);

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    subTitle: "Just do it",
    image: "",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    subTitle: "Just do it",
    image: "",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    subTitle: "Just do it",
    image: "",
  },
];

const FollowingList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item, index }) => <Item {...item} index={index} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FollowingList;
