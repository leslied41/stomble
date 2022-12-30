import { View } from "react-native";
import React from "react";
import VideoSingleThumbnail from "./VideoSingleThumbnail";

const VideoThumbnails = () => {
  return (
    <View className="flex-row">
      <View className="flex-1">
        <VideoSingleThumbnail />
      </View>
      <View className="flex-1">
        <VideoSingleThumbnail />
      </View>
      <View className="flex-1">
        <VideoSingleThumbnail />
      </View>
    </View>
  );
};

export default VideoThumbnails;
