import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useMemo } from "react";
import BusinessCard from "./BusinessCard";
import { ScrollMoreIcon } from "../../svg";

const fakeData = ["Nike", "Nike Aus", "Nike Us", "Nike China", "Nike Europe"];
const BusinessList = () => {
  const [sliceIndex, setSliceIndex] = useState<number>(1);
  const businessList = useMemo(
    () => fakeData.slice(0, sliceIndex),
    [sliceIndex]
  );
  const moreBusiness = () => {
    setSliceIndex((prev) => prev + 1);
  };
  return (
    <View className="pl-[25px] pr-[17px] pb-[13px] border-b border-[#5C5C5C]">
      <Text className="text-[16px] leading-[20px] font-bold text-white">
        Business:
      </Text>
      <View className="mt-[13px]">
        <View className="gap-[23px]">
          {businessList.map((f) => (
            <View key={f}>
              <BusinessCard title={f} />
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity className="mt-[14px]" onPress={moreBusiness}>
        <Text className="text-[14px] leading-5 text-[#5C5C5C] font-bold text-center">
          More Business
        </Text>
        <View className="items-center mt-1">
          <ScrollMoreIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BusinessList;
