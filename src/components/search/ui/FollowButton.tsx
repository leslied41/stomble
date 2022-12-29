import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type FollowButtonProps = {
  onPress: () => void;
  isFollowed: boolean;
};

const FollowButton: FC<FollowButtonProps> = ({ onPress, isFollowed }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[77px] h-[22px] rounded-[5px]  justify-center items-center"
      style={{ backgroundColor: isFollowed ? "#fff" : "#326FCB" }}
    >
      <Text
        className="text-[13px] leading-[22px] font-bold "
        style={{ color: isFollowed ? "#ABABAB" : "#fff" }}
      >
        {isFollowed ? "Following" : "Follow"}
      </Text>
    </TouchableOpacity>
  );
};

export default FollowButton;
