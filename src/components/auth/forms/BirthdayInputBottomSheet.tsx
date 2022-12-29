import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

type BirthdayInputBottomSheetProps = {
  closeBottomSheet: () => void;
  onChange: (event: any, selectedDate: any) => void;
  isBirthdayBottomSheetOpen: boolean;
  date: any;
};

const BirthdayInputBottomSheet: FC<BirthdayInputBottomSheetProps> = ({
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

export default BirthdayInputBottomSheet;
