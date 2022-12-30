import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type ButtonProps = {
  onPress: () => void;
  isFollowed?: boolean;
  variant: "follow" | "profile";
  size: "large" | "small";
};

const FollowButton: FC<ButtonProps> = ({
  onPress,
  isFollowed,
  variant,
  size,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[77px] h-[22px] rounded-[5px]  justify-center items-center"
      style={{
        backgroundColor:
          variant === "follow" ? (isFollowed ? "#fff" : "#326FCB") : "#F5F6F8",
        height: size === "large" ? 29 : 22,
        width: size === "large" ? 99 : 77,
      }}
    >
      <Text
        className="font-bold "
        style={{
          color:
            variant === "follow"
              ? isFollowed
                ? "#ABABAB"
                : "#fff"
              : "#ABABAB",
          fontSize: size === "large" ? 12 : 13,
          lineHeight: size === "large" ? 14.4 : 22,
        }}
      >
        {variant === "follow"
          ? isFollowed
            ? "Following"
            : "Follow"
          : "Profile"}
      </Text>
    </TouchableOpacity>
  );
};

export default FollowButton;
