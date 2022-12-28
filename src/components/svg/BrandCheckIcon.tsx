import { View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const BrandCheckIcon = () => {
  return (
    <Svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <Path
        d="M5 10C7.76172 10 10 7.76172 10 5C10 2.23828 7.76172 0 5 0C2.23828 0 0 2.23828 0 5C0 7.76172 2.23828 10 5 10ZM7.20703 4.08203L4.70703 6.58203C4.52344 6.76562 4.22656 6.76562 4.04492 6.58203L2.79492 5.33203C2.61133 5.14844 2.61133 4.85156 2.79492 4.66992C2.97852 4.48828 3.27539 4.48633 3.45703 4.66992L4.375 5.58789L6.54297 3.41797C6.72656 3.23438 7.02344 3.23438 7.20508 3.41797C7.38672 3.60156 7.38867 3.89844 7.20508 4.08008L7.20703 4.08203Z"
        fill="white"
      />
    </Svg>
  );
};

export default BrandCheckIcon;
