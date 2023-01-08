import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import { RadioBtnOff, RadioBtnOn } from "../../icons";
import { useFeedContext } from "../context/FeedProvider";

const reportOptions = [
  "Child abuse",
  "Sexual content",
  "Violence or repulsive content",
  "Hateful or abusive content",
  "Harmful or dangerous acts",
  "Spam or misleading",
];

const ReportVideo = () => {
  const [reportedOptions, setReportedOptions] = useState<string[]>([]);

  const { toggleBottomSheet } = useFeedContext();

  const toggleOption = (option: string) => () => {
    if (reportedOptions.includes(option))
      setReportedOptions((prev) => prev?.filter((o) => o !== option));
    else setReportedOptions((prev) => [...prev, option]);
  };

  return (
    <View>
      <View className="border-b border-[#5C5C5C]">
        <Text className="text-[16px] leading-[19.2px] font-bold text-white text-center mb-[21px]">
          Report Video
        </Text>
      </View>

      <View className="mx-[17px] mt-[5px]">
        <View>
          {reportOptions.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={toggleOption(option)}
              className="flex-row items-center mt-5"
            >
              {reportedOptions?.includes(option) ? (
                <RadioBtnOn />
              ) : (
                <RadioBtnOff />
              )}
              <Text className="ml-[18px] text-[15px] leading-[18px] font-medium text-white">
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row justify-end mt-[29px]">
          <Button
            title="Cancel"
            color="#5C5C5C"
            onPress={() => toggleBottomSheet!(-1, undefined)}
          />
          <Button
            disabled={reportedOptions.length === 0}
            title="Report"
            color="#fff"
            onPress={() => toggleBottomSheet!(0, "FeedThanksReport")}
          />
        </View>
      </View>
    </View>
  );
};

export default ReportVideo;
