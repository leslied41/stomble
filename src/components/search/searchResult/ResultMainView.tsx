import { View } from "react-native";
import React from "react";
import BusinessList from "./BusinessList";
import VideoCardList from "../mainView/VideoCardList";

const ResultMainView = () => {
  return (
    <View className="flex-1">
      <BusinessList />
      <View className="flex-1">
        <VideoCardList title="Videos" />
      </View>
    </View>
  );
};

export default ResultMainView;
