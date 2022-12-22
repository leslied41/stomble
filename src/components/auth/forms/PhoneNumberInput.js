import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { ArrowDown } from "../../icons";
import PropTypes from "prop-types";

const PhoneNumberInput = ({ onChangeFormattedText, defaultValue }) => {
  const phoneInput = useRef(null);
  const [countryObj, setCountryObj] = useState({});
  return (
    <PhoneInput
      className="flex-1 h-10"
      ref={phoneInput}
      defaultValue={defaultValue}
      defaultCode="AU"
      layout="first"
      onChangeFormattedText={onChangeFormattedText}
      onChangeCountry={(country) => setCountryObj(country)}
      textInputProps={{
        placeholderTextColor: "#ABABAB",
        selectionColor: "white",
      }}
      containerStyle={{
        height: 36,
        backgroundColor: "#222222",
      }}
      textContainerStyle={{
        backgroundColor: "#5C5C5C",
        borderRadius: 5,
        paddingLeft: 0,
      }}
      textInputStyle={{
        height: 36,
        color: "white",
        fontSize: 16,
        lineHeight: 19,
        fontWeight: "400",
      }}
      countryPickerButtonStyle={{
        backgroundColor: "#5C5C5C",
        height: 36,
        width: "auto",
        marginRight: 6,
        borderRadius: 5,
      }}
      renderDropdownImage={
        <View className="flex-row items-center">
          <Text className="text-[16px] leading-[19px] font-normal text-white">
            {countryObj?.name
              ? countryObj.name.toUpperCase().slice(0, 2)
              : "AU"}{" "}
            +{countryObj?.callingCode ? countryObj.callingCode[0] : "61"}
          </Text>
          <ArrowDown />
        </View>
      }
    />
  );
};
PhoneNumberInput.propTypes = {
  onChangeFormattedText: PropTypes.func,
  defaultValue: PropTypes.string,
};
export default PhoneNumberInput;
