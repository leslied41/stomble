import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  CodeField,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import CustomButton from "./CustomButton";
import PropTypes from "prop-types";

const VerifyCodes = ({ onPress }) => {
  const [value, setValue] = useState("");
  const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View className="mt-[46px]">
      <View>
        <Text className="text-[14px] leading-[16.8px] font-medium text-white text-center">
          Enter the 6 digits code we send to
        </Text>
        <Text className="text-[14px] leading-[16.8px] font-medium text-white text-center">
          +61******234
        </Text>
      </View>

      <View className="mt-[30px]">
        <CodeField
          {...codeFieldProps}
          rootStyle={styles.codeFieldRoot}
          cellCount={6}
          value={value}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          onChangeText={setValue}
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              style={[styles.cell]}
              key={index}
              // Call getter method on each cell component
              onLayout={getCellOnLayout(index)}
            >
              {symbol}
            </Text>
          )}
        />
        <Text className="mt-5 text-[15px] leading-[18px] font-normal text-white text-center">
          Resend code 58 seconds
        </Text>
      </View>
      <View className="mt-[45px]">
        <CustomButton
          text="Sign in"
          disabled={!value || value.length !== 6}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: { justifyContent: "center" },
  cell: {
    width: 40,
    height: 49,
    lineHeight: 49,
    fontSize: 18,
    fontWeight: "500",
    borderWidth: 0.6,
    color: "#fff",
    borderColor: "#fff",
    textAlign: "center",
    borderRadius: 5,
    marginRight: 12,
  },
});

VerifyCodes.propTypes = {
  onPress: PropTypes.func,
};
export default VerifyCodes;
