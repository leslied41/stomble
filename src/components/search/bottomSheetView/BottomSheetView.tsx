import { View, Text } from "react-native";
import React, { FC } from "react";
import BrandLogo from "./BrandLogo";
import BrandSocialInfo from "./BrandSocialInfo";
import VideoThumbnails from "./VideoThumbnails";
import { CustomButton } from "../ui";

type Props = {};

const BottomSheetView: FC<Props> = () => {
  return (
    <View className="mt-[30px] mx-[19px] flex-1">
      <View className="flex-row justify-between">
        <View>
          <BrandLogo title="Nike" />
        </View>
        <View>
          <BrandSocialInfo />
          <View className="flex-row mt-[22px]">
            <View>
              <CustomButton
                variant="follow"
                size="large"
                borderRadius={100}
                onPress={() => console.log("follwoed this brand")}
              />
            </View>
            <View className="ml-[10px]">
              <CustomButton
                variant="profile"
                size="large"
                borderRadius={100}
                onPress={() => console.log("clicked profile button")}
              />
            </View>
          </View>
        </View>
      </View>
      {/* brand brief */}
      <View className="mt-[10px]">
        <Text className="text-[12px] leading-[14.4px] text-white font-medium">
          We are a hotel based in Surry Hills we take pride on having the best
          customer services + we are pet friendly.
        </Text>
      </View>
      {/* videos list  */}
      <View className="mt-[10px]">
        <Text className="text-[15px] leanding-[18px] font-medium text-white">
          Top Videos
        </Text>
        <View className="mt-[11px]">
          <VideoThumbnails />
        </View>
      </View>
    </View>
  );
};

export default BottomSheetView;
