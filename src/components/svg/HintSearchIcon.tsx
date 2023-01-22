import React from "react";
import Svg, { Circle, G, Path, Defs, Rect, ClipPath } from "react-native-svg";

const HintSearchIcon = () => {
  return (
    <Svg width="29" height="28" viewBox="0 0 29 28" fill="none">
      <Circle cx="14.2109" cy="14" r="14" fill="#E0E0E0" />
      <G clip-path="url(#clip0_526_29390)">
        <Path
          d="M19.2109 12.5C19.2109 13.9344 18.7453 15.2594 17.9609 16.3344L21.9172 20.2937C22.3078 20.6844 22.3078 21.3188 21.9172 21.7094C21.5266 22.1 20.8922 22.1 20.5016 21.7094L16.5453 17.75C15.4703 18.5375 14.1453 19 12.7109 19C9.12031 19 6.21094 16.0906 6.21094 12.5C6.21094 8.90937 9.12031 6 12.7109 6C16.3016 6 19.2109 8.90937 19.2109 12.5ZM12.7109 17C15.1953 17 17.2109 14.9844 17.2109 12.5C17.2109 10.0156 15.1953 8 12.7109 8C10.2266 8 8.21094 10.0156 8.21094 12.5C8.21094 14.9844 10.2266 17 12.7109 17Z"
          fill="#ABABAB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_526_29390">
          <Rect
            width="16"
            height="16"
            fill="white"
            transform="translate(6.21094 6)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HintSearchIcon;
