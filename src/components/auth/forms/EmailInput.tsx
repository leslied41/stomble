import { View, Text, TextInput } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const EmailInput = ({ onChangeText, onBlur, value, placeholder, error }) => {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        textContentType="emailAddress"
        placeholderTextColor={error ? "#fff" : "#ABABAB"}
        textAlign="center"
        selectionColor="white"
        className="py-2 h-8 rounded-[5px]  text-white text-[16px] leading-[19.2px]"
        style={
          error
            ? { backgroundColor: "#FB4E4E" }
            : { backgroundColor: "#5C5C5C" }
        }
      />
      {error && (
        <Text className="mt-4 text-[13px] leading-4 font-normal text-[#FB4E4E]">
          {`Please enter a valid ${placeholder}`}
        </Text>
      )}
    </View>
  );
};

EmailInput.propTypes = {
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
export default EmailInput;
