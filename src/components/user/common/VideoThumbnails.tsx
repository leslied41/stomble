import { View, Text, Image, Dimensions } from "react-native";
import React, { FC } from "react";
import { converArrayInTriple } from "../../../services/utils";
import { BinIcon } from "../../icons";

type Video = {
  id: number | string;
  src: string;
};

type VideoThumbnailsType = {
  videos: Video[];
  date: string;
};

const VideoThumbnails: FC<VideoThumbnailsType> = ({ videos, date }) => {
  const videos_arr = converArrayInTriple(videos);
  return (
    <View>
      <View className="flex-row ml-[27px] mr-[10px] justify-between h-[33.65px] items-center">
        <Text className="text-[#ABABAB] text-[10.91px] leading-[13.01px] font-medium">
          {date}
        </Text>
        <BinIcon color="#ABABAB" size={24} />
      </View>
      {videos_arr.map((vs, index) => (
        <View key={`vs${index}`} className="flex-row">
          {vs.map((v) => (
            <View
              key={v.id}
              style={{ width: (Dimensions.get("window").width - 6) / 3 }}
            >
              <Image
                source={require("../../../../assets/images/user/test2.png")}
                style={{ width: "100%" }}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default VideoThumbnails;
