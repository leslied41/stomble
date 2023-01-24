import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type FollowingButtonProps = {
  onPress: () => void;
  followed: boolean;
};

const FollowingButton: FC<FollowingButtonProps> = ({ onPress, followed }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: followed ? "#fff" : "#326FCB" }}
      className="w-[65px] h-[21px] rounded-[5px]  justify-center items-center"
      onPress={onPress}
    >
      <Text
        className="text-[10.85px] leading-[19.9px] font-bold "
        style={{ color: followed ? "#ABABAB" : "#fff" }}
      >
        Following
      </Text>
    </TouchableOpacity>
  );
};

export default FollowingButton;
