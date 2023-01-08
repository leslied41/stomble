import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRight } from "../../icons";
import { useFeedContext } from "../context/FeedProvider";

const MoreOptions = () => {
  const { toggleBottomSheet } = useFeedContext();
  return (
    <View>
      <View className="border-b border-[#5C5C5C]">
        <Text className="text-[16px] leading-[19.2px] font-bold text-white text-center mb-[21px]">
          MoreOptions
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => toggleBottomSheet!(5, "FeedReportVideo")}
          className="mx-[17px] mt-[18px] flex-row items-center justify-between"
        >
          <Text className="text-[15px] leading-[18px] text-white font-medium">
            Report video
          </Text>
          <ChevronRight color="#fff" size={48} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreOptions;
