import { View, Text } from "react-native";
import React, { FC } from "react";
import { BusinessProfile } from "../common";
import { CustomButton } from "../ui";

type BusinessCarProps = {
  title: string;
};
const BusinessCard: FC<BusinessCarProps> = ({ title }) => {
  return (
    <View>
      <View className="flex-row">
        <View>
          <BusinessProfile width={40} height={40} borderRadius={20} />
        </View>
        <View className="ml-[11px] flex-1">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-[14px] leading-[20px] font-bold text-white">
                {title}
              </Text>
              <Text className="text-[14px] leading-[20px] font-bold text-[#ABABAB]">
                @Nike, Inc.
              </Text>
            </View>
            <View>
              <CustomButton
                variant="follow"
                size="small"
                borderRadius={5}
                onPress={() => console.log("follow")}
              />
            </View>
          </View>
          <View>
            <Text className="text-[12px] leading-20 font-normal text-white">
              Just do it. Perseverance, etc., highlights the self-awareness of
              young people and emphasises the movement itself. It can all mean
              different things from different people's perspectives.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusinessCard;
