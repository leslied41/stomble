import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const FollowButton = ({ onPress, isFollowed }) => {
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

FollowButton.propTypes = {
  onPress: PropTypes.func,
  isFollowed: PropTypes.bool,
};
export default FollowButton;
