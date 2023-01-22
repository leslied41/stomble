import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

const CustomButton: FC<Props> = ({ text, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className="w-[270px] h-11 rounded-[100px] border border-[#fff] justify-center items-center"
    >
      <Text className="text-[17px] leading-[22px] font-bold text-white">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
