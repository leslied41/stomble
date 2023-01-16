import { View, Text, TouchableOpacity } from "react-native";
import React, { FC, ReactNode } from "react";

type NoContentProps = {
  text: string;
  Icon: ReactNode;
};

const NoContent: FC<NoContentProps> = ({ text, Icon }) => {
  return (
    <View className="items-center">
      <Text className="text-[16px] leanding-[19.2px] font-normal text-white">
        {text}
      </Text>
      <View className="mt-[30px]">{Icon}</View>
      <TouchableOpacity className="w-[244px] h-[49px] rounded-[100px] bg-[#326FCB] justify-center items-center mt-[54px]">
        <Text className="text-[16.37px] leading-[19.64px] font-medium text-white">
          Start watching
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoContent;
