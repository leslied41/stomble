import { View, Text, TouchableOpacity } from "react-native";
import React, { FC, useCallback } from "react";
import { BrandCheckIcon } from "../../svg";
import { useAppDispatch } from "../../../redux/store";
import {
  openSearchBottomSheet,
  openSearchResultBottomSheet,
} from "../../../redux/features/search/searchSlice";
import BusinessProfile from "./BusinessProfile";

type BrandProps = {
  image?: string;
  brand: string;
  embedIn: "SearchResult" | "Search";
};

const Brand: FC<BrandProps> = ({ brand, embedIn }) => {
  //redux
  const dispatch = useAppDispatch();

  /**
   *toggle different bottomsheet based on where is brand component
   *embedin, either in SearchScreen or SearchResultScreen.
   */
  const handlePress = useCallback(() => {
    embedIn === "Search"
      ? dispatch(openSearchBottomSheet())
      : dispatch(openSearchResultBottomSheet());
  }, [embedIn, dispatch]);

  return (
    <TouchableOpacity
      className="flex-row items-center gap-x-[6px]"
      onPress={handlePress}
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
