import { View, Text } from "react-native";
import React, { FC, memo } from "react";
import { CustomButton } from "../../search";
import { useFeedContext } from "../context/FeedProvider";

type BrandInfoProps = {
  isStatic?: boolean;
};

const BrandInfo: FC<BrandInfoProps> = ({ isStatic = false }) => {
  const { toggleBottomSheet } = useFeedContext();
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
          onPress={
            !isStatic
              ? () => console.log("pressed follow button")
              : () => console.log("static brand info")
          }
        />
      </View>
      <Text className="mt-[13px] text-[13px] leading-[15.6px] font-normal text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique id et
        in lectus.
        <Text
          className="font-black text-[13px] leading-[15.6px]  text-white"
          onPress={
            !isStatic
              ? () => toggleBottomSheet!(2, "FeedReadMore")
              : () => console.log("static brand info")
          }
        >
          Read more
        </Text>
      </Text>
    </View>
  );
};

export default memo(BrandInfo);
