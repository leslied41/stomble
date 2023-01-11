import { View, Text } from "react-native";
import React, { FC } from "react";
import { IntroPageType } from "../../../screens/feed/Feed";
import CustomButton from "./CustomButton";
type FinishProps = {
  setIntroPage: React.Dispatch<React.SetStateAction<IntroPageType>>;
  setIsIntroOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Finish: FC<FinishProps> = ({ setIntroPage, setIsIntroOpen }) => {
  return (
    <View>
      <View className="mt-[127px] items-center">
        <CustomButton
          text="Finish"
          onPress={() => {
            setIsIntroOpen(false);
            setIntroPage("welcome");
          }}
        />
      </View>
      <View className="mx-[53px] items-center mt-[190px]">
        <Text className="text-center text-[16px] leading-[30px] font-medium text-white">
          Please like at least 4 videos and
        </Text>
        <Text className="text-center text-[16px] leading-[30px] font-medium text-white">
          follow 4 businesses so that we can
        </Text>
        <Text className="text-center text-[16px] leading-[30px] font-medium text-white">
          provide you with your favourite feeds
        </Text>
      </View>
    </View>
  );
};

export default Finish;
