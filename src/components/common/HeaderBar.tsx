import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { BackIcon } from "../svg";

type HeaderBarProps = {
  onPress: () => void;
  text: string;
  bgColor?: string;
  manual: boolean;
};

const HeaderBar: FC<HeaderBarProps> = ({
  onPress,
  text,
  bgColor,
  manual = false,
}) => {
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

export default HeaderBar;
