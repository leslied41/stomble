import { View, Text } from "react-native";
import React from "react";

const ReadMore = () => {
  return (
    <View>
      <View className="border-b border-[#5C5C5C]">
        <Text className="text-[16px] leading-[19.2px] text-white font-bold text-center mb-[21px]">
          Description
        </Text>
      </View>
      <View className="mx-[17px] mt-[22px]">
        <Text className="text-[13px] leading-[15.6px] text-white font-light ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id
          et in lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Tristique id et in lectus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Tristique id et in lectus. Lorem ipsum dolor sit amet
          <Text className="font-semibold">
            #nike #shoes Go check out our web: www.nike.com.au
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ReadMore;
