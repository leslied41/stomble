import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import { InputProps } from "./EmailInput";

const NameInput: FC<InputProps> = ({
  onChangeText,
  onBlur,
  value,
  error,
  placeholder,
}) => {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        textContentType="name"
        placeholderTextColor={error ? "#fff" : "#ABABAB"}
        textAlign="center"
        selectionColor="white"
        className=" py-2 h-8 rounded-[5px]  text-white  text-[16px] leading-[19.2px]"
        style={
          error
            ? { backgroundColor: "#FB4E4E" }
            : { backgroundColor: "#5C5C5C" }
        }
      />
      {error && (
        <Text className="mt-4 text-[13px] leading-4 font-normal text-[#FB4E4E]">
          {`Please enter your ${placeholder}`}
        </Text>
      )}
    </View>
  );
};

export default NameInput;
