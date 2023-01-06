import { View, Text } from "react-native";
import React, { memo } from "react";
import { CustomButton } from "../../search";

const BrandInfo = () => {
  return (
    <View>
      <View className="flex-row">
        <Text className="mr-5 text-[16px] leading-[19.2px] font-bold text-white ">
          @Nike
        </Text>
        <CustomButton
          variant="follow"
          size="small"
          borderRadius={5}
          onPress={() => console.log("pressed follow button")}
        />
      </View>
      <Text className="mt-[13px] text-[13px] leading-[15.6px] font-normal text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id et
        in lectus.
        <Text
          className="font-black text-[13px] leading-[15.6px]  text-white"
          onPress={() => console.log("read more")}
        >
          Read more
        </Text>
      </Text>
    </View>
  );
};

export default memo(BrandInfo);
