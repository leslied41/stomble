import { View, Text, Pressable } from "react-native";
import React from "react";
import { ArrowDown } from "../../icons";
import { converDate } from "../../../services/utils";
import PropTypes from "prop-types";

const BirthdayInput = ({ openBottomSheet, currentDate }) => {
  return (
    <View>
      <Text className="text-[16px] leading-[19.2px] font-normal text-white">
        When is your birthday?
      </Text>
      <Pressable
        className="mt-5 flex-row items-center"
        onPress={openBottomSheet}
      >
        <View className="flex-1 h-8 bg-[#5C5C5C] rounded-[5px] justify-center mr-3">
          <Text
            className="text-[16px] leading-[19.2px] font-normal  text-center"
            style={currentDate ? { color: "#fff" } : { color: "#ABABAB" }}
          >
            {currentDate ? currentDate : converDate(new Date())}
          </Text>
        </View>
        <ArrowDown />
      </Pressable>
    </View>
  );
};

BirthdayInput.propTypes = {
  openBottomSheet: PropTypes.func,
  currentDate: PropTypes.any,
};

export default BirthdayInput;
