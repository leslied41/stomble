import { View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = () => {
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <Path
        d="M11.495 10.8333H10.7732L10.5174 10.5858C11.4128 9.54083 11.9518 8.18416 11.9518 6.70833C11.9518 3.4175 9.29306 0.75 6.01302 0.75C2.73297 0.75 0.0742188 3.4175 0.0742188 6.70833C0.0742188 9.99916 2.73297 12.6667 6.01302 12.6667C7.48401 12.6667 8.83623 12.1258 9.8778 11.2275L10.1245 11.4842V12.2083L14.6928 16.7825L16.0541 15.4167L11.495 10.8333V10.8333ZM6.01302 10.8333C3.738 10.8333 1.90154 8.99083 1.90154 6.70833C1.90154 4.42583 3.738 2.58333 6.01302 2.58333C8.28803 2.58333 10.1245 4.42583 10.1245 6.70833C10.1245 8.99083 8.28803 10.8333 6.01302 10.8333Z"
        fill="white"
      />
    </Svg>
  );
};

export default SearchIcon;