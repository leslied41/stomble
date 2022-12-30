import { View, Text, Image } from "react-native";
import React from "react";

const VideoSingleThumbnail = () => {
  return (
    <View className="w-[107px] h-[107px] rounded-[5px] overflow-hidden relative">
      <Image
        source={require("../../../../assets/images/search/BG.png")}
        resizeMode="cover"
        className="flex-1"
      />
      <View className="w-[31px] h-[15px] rouned-[3px] bg-[#FB4E4E] justify-center items-center absolute left-[11px] top-2">
        <Text className="text-[8px] leanding-[9.6px] text-white font-black">
          Top1
        </Text>
      </View>
    </View>
  );
};

export default VideoSingleThumbnail;
