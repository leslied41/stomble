import { View, Pressable, TextInput, Text } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { EyeIcon, EyeCloseIcon, ErrorIcon, CheckIcon } from "../../icons";

const PasswordInput = ({
  onBlur,
  onChange,
  value,
  special_char_check,
  ps_length_check,
  patternCheck = true,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View>
      <View className="flex-row  items-center">
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder="Password"
          placeholderTextColor="#ABABAB"
          textContentType="password"
          secureTextEntry={!hidePassword}
          textAlign="center"
          className="flex-1 py-2 h-8 rounded-[5px] bg-[#5C5C5C] text-white text-[16px] leading-[19.2px] mr-3"
        />

        <Pressable onPress={() => setHidePassword((prev) => !prev)}>
          {hidePassword ? <EyeCloseIcon /> : <EyeIcon />}
        </Pressable>
      </View>

      {patternCheck && (
        <View className="mt-5">
          <Text className="text-[13px] leading-[15.6px] font-medium text-white">
            Your password must have:
          </Text>
          <View className="mt-2">
            <View className="flex-row items-center gap-x-2">
              <View>{ps_length_check ? <CheckIcon /> : <ErrorIcon />}</View>
              <Text className="text-[14px] leading-[16.8px] font-medium text-[#FB4E4E] ">
                At least 8 characters
              </Text>
            </View>
            <View className="flex-row items-center gap-x-2">
              <View>{special_char_check ? <CheckIcon /> : <ErrorIcon />}</View>
              <Text className="text-[14px] leading-[16.8px] font-medium text-[#FB4E4E] ">
                Main contain at least 1 special character
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  ps_length_check: PropTypes.bool,
  special_char_check: PropTypes.bool,
  patternCheck: PropTypes.bool,
};

export default PasswordInput;
