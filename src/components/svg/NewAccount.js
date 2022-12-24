import { View } from "react-native";
import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const NewAccount = ({ className }) => {
  return (
    <View className={className}>
      <Svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="46" cy="46" r="46" fill="#5C5C5C" />
        <Path
          d="M49.8563 24.6875C49.8563 22.5441 48.1326 20.8125 45.9992 20.8125C43.8657 20.8125 42.142 22.5441 42.142 24.6875V42.125H24.7849C22.6514 42.125 20.9277 43.8566 20.9277 46C20.9277 48.1434 22.6514 49.875 24.7849 49.875H42.142V67.3125C42.142 69.4559 43.8657 71.1875 45.9992 71.1875C48.1326 71.1875 49.8563 69.4559 49.8563 67.3125V49.875H67.2134C69.3469 49.875 71.0706 48.1434 71.0706 46C71.0706 43.8566 69.3469 42.125 67.2134 42.125H49.8563V24.6875Z"
          fill="#222222"
        />
      </Svg>
    </View>
  );
};

export default NewAccount;
