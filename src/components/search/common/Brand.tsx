import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { BrandCheckIcon } from "../../svg";
import { useAppDispatch } from "../../../redux/store";
import { openSearchBottomSheet } from "../../../redux/features/search/searchSlice";
import BusinessProfile from "./BusinessProfile";

type BrandProps = {
  image?: string;
  brand: string;
};

const Brand: FC<BrandProps> = ({ brand }) => {
  //redux
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      className="flex-row items-center gap-x-[6px]"
      onPress={() => dispatch(openSearchBottomSheet())}
    >
      <BusinessProfile width={30} height={30} borderRadius={15} />
      <View className="flex-row items-center">
        <Text className="text-[12px] leading-[14.52px] text-white font-medium">
          {brand}
        </Text>
        <View className="ml-[3px]">
          <BrandCheckIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Brand;
