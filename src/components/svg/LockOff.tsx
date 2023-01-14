import React from "react";
import Svg, { Path, Rect, Circle, G, Defs, ClipPath } from "react-native-svg";

const LockOff = () => {
  return (
    <Svg width="48" height="20" viewBox="0 0 48 20" fill="none">
      <Rect width="48" height="20" rx="10" fill="white" />
      <Circle cx="10" cy="10" r="8" fill="#232637" />
      <G clipPath="url(#clip0_612_44797)">
        <Path
          d="M36.2143 7.09375C36.2143 6.14414 37.0134 5.375 38 5.375C38.7121 5.375 39.3259 5.77461 39.6138 6.35684C39.7835 6.70059 40.2098 6.84668 40.5647 6.6834C40.9196 6.52012 41.0737 6.10977 40.904 5.76816C40.3884 4.72402 39.2835 4 38 4C36.2254 4 34.7857 5.38574 34.7857 7.09375V8.125H34.4286C33.6406 8.125 33 8.7416 33 9.5V13.625C33 14.3834 33.6406 15 34.4286 15H41.5714C42.3594 15 43 14.3834 43 13.625V9.5C43 8.7416 42.3594 8.125 41.5714 8.125H36.2143V7.09375Z"
          fill="#232637"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_612_44797">
          <Rect
            width="10"
            height="11"
            fill="white"
            transform="translate(33 4)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LockOff;
