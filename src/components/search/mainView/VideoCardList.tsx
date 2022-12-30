import { View, Text, FlatList } from "react-native";
import React, { FC } from "react";
import VideoCard from "../common/VideoCard";

const fakeData = [
  { id: 1, brand: "Nike" },
  { id: 2, brand: "Adidas" },
  { id: 3, brand: "Puma" },
  { id: 4, brand: "HM" },
  { id: 5, brand: "Zara" },
];

const ListFooterComponent = () => {
  return <View className="h-6" />;
};

type VideoCardListProps = {
  title: string;
};
const VideoCardList: FC<VideoCardListProps> = ({ title }) => {
  return (
    <View className="flex-1">
      <Text className="text-[20px] leading-6 font-bold text-white">
        {title}
      </Text>
      <View className="mt-[15px] flex-1">
        <FlatList
          data={fakeData}
          renderItem={VideoCard}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<ListFooterComponent />}
        />
      </View>
    </View>
  );
};

export default VideoCardList;
