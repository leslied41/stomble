import { View, Image, Text } from "react-native";
import React, { FC } from "react";

type BrandLogoProps = {
  image?: string;
  title: string;
};

const BrandLogo: FC<BrandLogoProps> = ({ title }) => {
  return (
    <View>
      <View className="w-[73px] h-[73px] rounded-[36.5px] bg-white justify-center items-center">
        <Image
          source={require("../../../../assets/images/search/Nike-logo.png")}
          style={{ width: 56, height: 29 }}
          resizeMode="contain"
        />
      </View>
      <Text className="text-[16px] leading-[19.2px] font-bold text-white mt-[6px]">
        {title}
      </Text>
      <Text className="mt-[6px] text-[13px] leading-[15.6px] font-normal text-[#ABABAB]">
        @ {title} account
      </Text>
    </View>
  );
};

export default BrandLogo;
