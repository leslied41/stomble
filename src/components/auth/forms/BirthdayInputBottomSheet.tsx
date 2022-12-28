import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import PropTypes from "prop-types";

const BirthdayInputBottomSheet = ({
  closeBottomSheet,
  onChange,
  isBirthdayBottomSheetOpen,
  date,
}) => {
  return (
    <View>
      <View className="border-b border-[#5C5C5C] px-[18px] pb-[19px]">
        <TouchableOpacity className="self-end" onPress={closeBottomSheet}>
          <Text className="text-[#326FCB] text-[20px] leading-[24px] font-bold">
            Done
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1">
        {isBirthdayBottomSheetOpen && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
            display="spinner"
            textColor="#fff"
          />
        )}
      </View>
    </View>
  );
};

BirthdayInputBottomSheet.propTypes = {
  closeBottomSheet: PropTypes.func,
  onChange: PropTypes.func,
  isBirthdayBottomSheetOpen: PropTypes.bool,
  date: PropTypes.any,
};
export default BirthdayInputBottomSheet;
