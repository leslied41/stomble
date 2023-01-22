import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { CircleCloseIcon } from "../../svg";

type Props = {
  item: string;
};
const SingleHistoryRecord: FC<Props> = ({ item }) => {
  return (
    <View className="px-[10px] py-[6px] ml-1 mt-[22px] bg-[#C4C4C4]/30 flex-row items-center rounded-[32px]">
      <Text className="text-[14px] leading-[20px] font-normal text-white">
        {item}
      </Text>
      <Pressable
        className="ml-[30px]"
        onPress={() => console.log("delete this history")}
      >
        <CircleCloseIcon />
      </Pressable>
    </View>
  );
};

export default SingleHistoryRecord;
