import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RadioBtnOff, RadioBtnOn } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getGender,
  setGender,
  closeGenderBottomSheet,
} from "../../../redux/features/auth/authSlice";

const options = ["Male", "Female", "Prefer not to say"];

const GenderInputBottomSheet = () => {
  //redux
  const dispatch = useDispatch();
  const currentGender = useSelector(getGender);

  return (
    <View>
      <View className="border-b border-[#5C5C5C] px-[18px] pb-[19px]">
        <TouchableOpacity
          className="self-end"
          onPress={() => dispatch(closeGenderBottomSheet())}
        >
          <Text className="text-[#326FCB] text-[20px] leading-[24px] font-bold">
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View className="px-[18px] pt-[34px] gap-y-5">
        {options.map((o) => (
          <View key={o} className="flex-row">
            <TouchableOpacity onPress={() => dispatch(setGender(o))}>
              {currentGender === o ? <RadioBtnOn /> : <RadioBtnOff />}
            </TouchableOpacity>

            <Text className="ml-[18px] text-[15px] leading-[18px] text-white font-medium">
              {o}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GenderInputBottomSheet;
