import React from "react";
import Svg, { Path, Circle, Rect, Defs, G, ClipPath } from "react-native-svg";

const CheckedCircle = () => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <G ClipPath="url(#clip0_618_35558)">
        <Circle cx="7.70768" cy="7.70841" r="4.79167" fill="white" />
        <Path
          d="M7.5 15C11.6426 15 15 11.6426 15 7.5C15 3.35742 11.6426 0 7.5 0C3.35742 0 0 3.35742 0 7.5C0 11.6426 3.35742 15 7.5 15ZM10.8105 6.12305L7.06055 9.87305C6.78516 10.1484 6.33984 10.1484 6.06738 9.87305L4.19238 7.99805C3.91699 7.72266 3.91699 7.27734 4.19238 7.00488C4.46777 6.73242 4.91309 6.72949 5.18555 7.00488L6.5625 8.38184L9.81445 5.12695C10.0898 4.85156 10.5352 4.85156 10.8076 5.12695C11.0801 5.40234 11.083 5.84766 10.8076 6.12012L10.8105 6.12305Z"
          fill="#326FCB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_618_35558">
          <Rect width="15" height="15" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CheckedCircle;
