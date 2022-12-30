import { View, Text } from "react-native";
import React, { FC, ReactNode } from "react";

type TextWrapProps = {
  children: ReactNode;
};
const TextWrap: FC<TextWrapProps> = ({ children }) => {
  return (
    <Text className="text-[15px] leading-[18px] font-semibold text-white">
      {children}
    </Text>
  );
};

const BrandSocialInfo = () => {
  return (
    <View className="flex-row gap-x-10">
      {/* videos quantity */}
      <View>
        <TextWrap>
          <Text className="text-center">5</Text>
        </TextWrap>
        <TextWrap>Videos</TextWrap>
      </View>
      {/* followers quantity */}
      <View>
        <TextWrap>
          <Text className="text-center">100</Text>
        </TextWrap>
        <TextWrap>Followers</TextWrap>
      </View>
      {/* likes quantity */}
      <View>
        <TextWrap>
          <Text className="text-center">5</Text>
        </TextWrap>
        <TextWrap>Likes</TextWrap>
      </View>
    </View>
  );
};

export default BrandSocialInfo;
