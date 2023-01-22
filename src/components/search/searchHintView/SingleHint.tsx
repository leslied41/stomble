import { View, Text } from "react-native";
import React, { FC } from "react";
import { BusinessProfile } from "../common";
import { HintSearchIcon } from "../../svg";

type Props = {
  isBusiness?: boolean;
  hint: string;
};

const SingleHint: FC<Props> = ({ isBusiness, hint }) => {
  return (
    <View className="flex-row items-center mt-4">
      {isBusiness ? (
        <BusinessProfile width={28} height={28} borderRadius={14} />
      ) : (
        <HintSearchIcon />
      )}
      <Text className="ml-[14.21px] text-[14px] leading-5 font-bold text-white">
        {hint}
      </Text>
    </View>
  );
};

export default SingleHint;
