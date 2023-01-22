import React from "react";
import Svg, { Path } from "react-native-svg";

const OneFinger = () => {
  return (
    <Svg width="50" height="51" viewBox="0 0 50 51" fill="none">
      <Path
        d="M16 22.5C16 20.843 14.657 19.5 13 19.5C11.343 19.5 10 20.843 10 22.5V32.5C10 40.784 16.716 47.5 25 47.5C33.284 47.5 40 40.784 40 32.5V25.5C40 23.843 38.657 22.5 37 22.5C35.343 22.5 34 23.843 34 25.5V23.5C34 21.843 32.657 20.5 31 20.5C29.343 20.5 28 21.843 28 23.5V21.5C28 19.843 26.657 18.5 25 18.5C23.343 18.5 22 19.843 22 21.5V6.5C22 4.843 20.657 3.5 19 3.5C17.343 3.5 16 4.843 16 6.5V31.5V22.5V22.5Z"
        stroke="white"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default OneFinger;
