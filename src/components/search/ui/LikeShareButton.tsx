import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { Shadow } from "react-native-shadow-2";
import { HeartIcon, ShareIcon } from "../../icons";

type LikeShareButtonProps = {
  like: () => void;
  share: () => void;
};

const LikeShareButton: FC<LikeShareButtonProps> = ({ like, share }) => {
  return (
    <Shadow
      offset={[0, 4]}
      startColor="rgba(0, 0, 0, 0.16)"
      distance={6}
      //reference:https://github.com/SrBrahma/react-native-shadow-2/issues/31
      //the library:https://www.npmjs.com/package/react-native-shadow-2
    >
      <View className="w-[134px] h-[29px] bg-[#F8F8F8] rounded-[10px] border border-['#E3E3E3'] flex-row justify-between items-center px-4">
        <Pressable className="flex-row items-center" onPress={like}>
          <HeartIcon color="red" />
          <Text className="text-[#5C5C5C] text-[8px] leading-3 font-medium ml-[5.24px]">
            Like
          </Text>
        </Pressable>

        <Pressable className="flex-row items-center" onPress={share}>
          <ShareIcon />
          <Text className="text-[#5C5C5C] text-[8px] leading-3 font-medium ml-[5.24px]">
            Share
          </Text>
        </Pressable>
      </View>
    </Shadow>
  );
};

export default LikeShareButton;
