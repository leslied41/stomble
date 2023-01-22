import React from "react";
import Svg, { Path } from "react-native-svg";

const EmptyPlayIcon = () => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.11304 1.36578L13.698 7.47103L3.11304 13.5763V1.36578ZM4.35822 3.52144V11.4206L11.2058 7.47103L4.35822 3.52144Z"
        fill="white"
      />
    </Svg>
  );
};

export default EmptyPlayIcon;
