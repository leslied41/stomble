import { View, Text } from "react-native";
import React from "react";

const Policy = () => {
  return (
    <View>
      <Text className="text-[13px] leading-[16.38px] font-medium text-white">
        By creating an account to Stomble, you agree to the
        <Text className="text-[13px] leading-[16.38px] font-medium text-[#326FCB]">
          {" "}
          Terms of Service{" "}
        </Text>
        and
        <Text className="text-[13px] leading-[16.38px] font-medium text-[#326FCB] text-center">
          {" "}
          Privacy Policies
        </Text>
      </Text>
    </View>
  );
};

export default Policy;
