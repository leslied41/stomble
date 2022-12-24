import { View } from "react-native";
import React from "react";
import Svg, { Circle } from "react-native-svg";

const UncheckedCircle = ({ className }) => {
  return (
    <View className={className}>
      <Svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="7" cy="7" r="6.5" stroke="#E0E0E0" />
      </Svg>
    </View>
  );
};

export default UncheckedCircle;
