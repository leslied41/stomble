import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import { BackIcon } from "../svg";

type HeaderBarProps = {
  onPress: () => void;
  done?: () => void;
  text: string;
  bgColor?: string;
  manual: boolean;
  goBack?: boolean;
};

const HeaderBar: FC<HeaderBarProps> = ({
  onPress,
  text,
  done,
  bgColor,
  manual = false,
  goBack
}) => {
  return (
    <View
      className="flex flex-row items-center gap-x-4 justify-between pr-5"
      style={
        manual
          ? { backgroundColor: bgColor, height: 101, marginTop: 20 }
          : { backgroundColor: bgColor }
      }
    >

      <View className="flex flex-row items-center">
        {!goBack &&  //goBack when true back button will be visible
          <Pressable onPress={onPress}>
            <BackIcon />
          </Pressable>}
        <Text className="text-white text-[24px] leading-[28.8px] font-black" style={{ paddingLeft: !goBack ? 0 : 18 }}>
          {text}
        </Text>
      </View>

      {done && <Pressable onPress={done}>
        <Text className="text-[#326FCB] text-[18px] leading-[28.8px] font-medium">Done</Text >
      </Pressable>}

    </View>
  );
};

export default HeaderBar;
