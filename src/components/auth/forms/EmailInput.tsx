import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import React, { FC } from "react";

export type InputProps = {
  onChangeText: ((text: string) => void) | undefined;
  onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  value: string;
  placeholder: string;
  error: string;
};

const EmailInput: FC<InputProps> = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
  error,
}) => {
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

export default EmailInput;
