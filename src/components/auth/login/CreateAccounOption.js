import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NewAccount } from "../../svg";
import PropTypes from "prop-types";

const CreateAccounOption = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="w-[163px] h-[163px] justify-center items-center"
      onPress={onPress}
    >
      <NewAccount />
      <Text className="mt-3 text-[14px] leading-[16.8] font-bold text-white text-center">
        Create a new account
      </Text>
    </TouchableOpacity>
  );
};

CreateAccounOption.propTypes = {
  onPress: PropTypes.func,
};

export default CreateAccounOption;
