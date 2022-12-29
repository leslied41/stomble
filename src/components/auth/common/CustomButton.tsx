import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type CustomButtonProps = {
  text: string;
  onPress: () => void;
  bgColor?: string;
  width?: number;
  borderRadius?: number;
  disabled?: boolean;
};
const CustomButton: FC<CustomButtonProps> = ({
  text,
  onPress,
  bgColor = "#326FCB",
  width,
  borderRadius = 10,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        disabled
          ? {
              backgroundColor: "#5C5C5C",
              width: width,
              borderRadius: borderRadius,
            }
          : {
              backgroundColor: bgColor,
              width: width,
              borderRadius: borderRadius,
            }
      }
      className="h-[49px] justify-center"
      disabled={disabled}
    >
      <Text className="text-[18px] leading-[21px] font-medium text-center text-white">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
