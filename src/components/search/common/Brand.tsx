import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BrandCheckIcon } from "../../svg";
import { useDispatch } from "react-redux";
import { openSearchBottomSheet } from "../../../redux/features/search/searchSlice";
import PropTypes from "prop-types";

const Brand = ({ image, brand }) => {
  //redux
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      className="flex-row items-center gap-x-[6px]"
      onPress={() => dispatch(openSearchBottomSheet())}
    >
      <View className="w-[30px] h-[30px] rounded-[15px] bg-white justify-center items-center">
        <Image
          source={require("../../../../assets/images/search/Nike-logo.png")}
          //for static image, it cannot be passed as props as it need to be built here.
          //but for https image it can be done using uri.
        />
      </View>
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

Brand.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string,
};

export default Brand;
