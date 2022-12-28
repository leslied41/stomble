import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import VideoCard from "./VideoCard";
import PropTypes from "prop-types";

const fakeData = [
  { id: 1, brand: "Nike" },
  { id: 2, brand: "Adidas" },
  { id: 3, brand: "Puma" },
  { id: 4, brand: "HM" },
  { id: 5, brand: "Zara" },
];
const VideoCardList = ({ title }) => {
  return (
    <View className="flex-1">
      <Text className="text-[20px] leading-6 font-bold text-white">
        {title}
      </Text>
      <View className="mt-[15px] flex-1">
        <FlatList
          data={fakeData}
          renderItem={VideoCard}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <View className="h-6"></View>}
        />
      </View>
    </View>
  );
};

VideoCardList.propTypes = {
  title: PropTypes.string,
};
export default VideoCardList;
