import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../common/GlobalProvider";

const ThanksReport = () => {
  const { toggleBottomSheet } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      toggleBottomSheet!(-1, undefined);
    }, 5000);
  }, [toggleBottomSheet]);

  return (
    <View>
      <Text className="text-white text-center text-[15px] leading-[18px] font-medium ">
        Thanks for reporting
      </Text>
    </View>
  );
};

export default ThanksReport;
