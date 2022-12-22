import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeBirthdayBottomSheet,
  getIsBirthdayBottomSheetOpen,
  setBirthday,
  clearBirthday,
} from "../../../redux/features/auth/authSlice";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { converDate } from "../../../services/utils";

const BirthdayInputBottomSheet = () => {
  const [date, setDate] = useState(new Date());
  //redux
  const isBirthdayBottomSheetOpen = useSelector(getIsBirthdayBottomSheetOpen);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    dispatch(setBirthday(converDate(currentDate)));
    setDate(currentDate);
  };

  useEffect(() => {
    return () => {
      dispatch(clearBirthday());
    };
  }, []);

  return (
    <View>
      <View className="border-b border-[#5C5C5C] px-[18px] pb-[19px]">
        <TouchableOpacity
          className="self-end"
          onPress={() => dispatch(closeBirthdayBottomSheet())}
        >
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

export default BirthdayInputBottomSheet;
