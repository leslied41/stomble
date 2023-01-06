import { Text, View, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { BusinessProfile } from "../../search";
import { HeartIcon, ShareIcon, ThreeDotsIcon } from "../../icons";

const ButtonsGroup = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("press brand")}>
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
        onPress={() => console.log("press share")}
        className="mt-[30px] items-center"
      >
        <ShareIcon size={29} color="white" />
        <Text className="text-[11px] leading-[13.2px] text-white font-bold">
          100
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("press three dots")}
        className="mt-[30px]"
      >
        <ThreeDotsIcon size={29} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(ButtonsGroup);
