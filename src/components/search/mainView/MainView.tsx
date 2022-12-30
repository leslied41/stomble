import { View } from "react-native";
import React from "react";
import VideoCardList from "./VideoCardList";

const MainView = () => {
  return (
    <View className="flex-1">
      <VideoCardList title="Recommendations" />
    </View>
  );
};

export default MainView;
