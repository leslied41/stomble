import { View, Text, Pressable } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { BackIcon } from "../svg";
const HeaderBar = ({ onPress, text, bgColor, manual = false }) => {
  return (
    <View
      className="flex flex-row items-center gap-x-4"
      style={
        manual
          ? { backgroundColor: bgColor, height: 101, marginTop: 20 }
          : { backgroundColor: bgColor }
      }
    >
      <Pressable onPress={onPress}>
        <BackIcon />
      </Pressable>
      <Text className="text-white text-[24px] leading-[28.8px] font-black">
        {text}
      </Text>
    </View>
  );
};

HeaderBar.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  bgColor: PropTypes.string,
  manual: PropTypes.bool,
};

export default HeaderBar;
