import { Text, TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  text,
  onPress,
  bgColor = "#326FCB",
  width,
  borderRadius = 10,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        width: width,
        borderRadius: borderRadius,
      }}
      className=" h-[49px] justify-center"
    >
      <Text className="text-[18px] leading-[21px] font-medium text-center text-white">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.number,
  borderRadius: PropTypes.number,
};
export default CustomButton;
