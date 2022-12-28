import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import Brand from "./Brand";
import { PlayIcon } from "../../icons";
import { LikeShareButton, FollowButton } from "../ui";

import PropTypes from "prop-types";

let isFollowed = true;
//fake if this branch has been followed by one certain user.
const VideoCard = ({ item, index }) => {
  return (
    <View
      className="h-[220px] rounded-[30px]"
      style={{ marginTop: index !== 0 ? 34.54 : 0 }}
    >
      <ImageBackground
        source={require("../../../../assets/images/search/BG.png")}
        resizeMode="cover"
        className="flex-1 ralative"
      >
        {/* brand logo  */}
        <View className="absolute left-[18px] top-[19px]">
          <Brand brand={item.brand} />
        </View>
        {/* follow button */}
        <View className="absolute top-[23px] right-4">
          <FollowButton
            onPress={() => console.log("you followed this brand")}
            isFollowed
          />
        </View>
        {/* play button and info */}
        <View className="ml-[22.47px] mr-[37px] mt-[154px]">
          <View className="flex-row gap-x-[10.91px] items-center">
            <TouchableOpacity
              className="w-[33.62px] h-[33.62px] bg-white rounded-[16.81px] justify-center items-center"
              onPress={() => console.log("play video")}
            >
              <PlayIcon />
            </TouchableOpacity>
            <View className="flex-1">
              <Text className="text-[10px] leading-3 font-normal text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique id et in lectus.
                <Text
                  className="font-black underline"
                  onPress={() => console.log("read more")}
                >
                  Read more
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* like and share button */}
        <View
          className="absolute top-[204px] left-1/2 bg-transparent"
          style={{ transform: [{ translateX: -67 }] }}
        >
          <LikeShareButton />
        </View>
      </ImageBackground>
    </View>
  );
};

VideoCard.propTypes = {
  item: PropTypes.object,
};
export default VideoCard;
