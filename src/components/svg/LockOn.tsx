import React from "react";
import Svg, { Path, Rect, Circle, G, Defs, ClipPath } from "react-native-svg";

const LockOff = () => {
  return (
    <Svg width="48" height="20" viewBox="0 0 48 20" fill="none">
      <Rect width="48" height="20" rx="10" fill="#404FD3" />
      <Circle cx="38" cy="10" r="8" fill="#232637" />
      <G clipPath="url(#clip0_612_45479)">
        <Path
          d="M8.21429 7.23438V8.3125H11.7857V7.23438C11.7857 6.2416 10.9866 5.4375 10 5.4375C9.01339 5.4375 8.21429 6.2416 8.21429 7.23438ZM6.78571 8.3125V7.23438C6.78571 5.44873 8.22545 4 10 4C11.7746 4 13.2143 5.44873 13.2143 7.23438V8.3125H13.5714C14.3594 8.3125 15 8.95713 15 9.75V14.0625C15 14.8554 14.3594 15.5 13.5714 15.5H6.42857C5.64063 15.5 5 14.8554 5 14.0625V9.75C5 8.95713 5.64063 8.3125 6.42857 8.3125H6.78571Z"
          fill="#232637"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_612_45479">
          <Rect
            width="10"
            height="11.5"
            fill="white"
            transform="translate(5 4)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LockOff;
