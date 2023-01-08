import { Text, View, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { BusinessProfile } from "../../search";
import { HeartIcon, ShareIcon, ThreeDotsIcon } from "../../icons";
import { useFeedContext } from "../context/FeedProvider";

const ButtonsGroup = () => {
  const { toggleBottomSheet } = useFeedContext();
  return (
    <View>
      <TouchableOpacity onPress={() => toggleBottomSheet!(4, "BrandInfo")}>
        <BusinessProfile width={48} height={48} borderRadius={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("press heart")}
        className="mt-[30px] items-center"
      >
        <HeartIcon size={29} color="white" />
        <Text className="text-[11px] leading-[13.2px] text-white font-bold">
          100
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => toggleBottomSheet!(3, "FeedShare")}
        className="mt-[30px] items-center"
      >
        <ShareIcon size={29} color="white" />
        <Text className="text-[11px] leading-[13.2px] text-white font-bold">
          100
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => toggleBottomSheet!(1, "FeedMoreOptions")}
        className="mt-[30px] items-center"
      >
        <ThreeDotsIcon size={29} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(ButtonsGroup);
