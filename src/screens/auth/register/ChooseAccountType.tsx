import { View, Image } from "react-native";
import React from "react";
import { CustomButton } from "../../../components/auth";
import { RootScreenProps } from "../../../types/navigation";
import { ScreenLayout } from "../../../components/common";

const ChooseAccountType = ({
  navigation,
}: RootScreenProps<"ChooseAccountType">) => {
  return (
    <ScreenLayout header="Choose account type">
      <View className="flex-1 pt-[39px] pb-[60px] justify-between">
        <View className="items-center">
          <Image
            source={require("../../../../assets/images/auth/business.png")}
            className="w-[184px] h-[184px]"
          />
          <View className="mt-7">
            <CustomButton
              text="Business"
              width={160}
              borderRadius={90}
              onPress={() => navigation.navigate("BusinessRegister")}
            />
          </View>
        </View>
        <View className="items-center">
          <Image
            source={require("../../../../assets/images/auth/personal.png")}
            className="w-[184px] h-[184px]"
          />
          <View className="mt-7">
            <CustomButton
              text="Personal"
              width={160}
              borderRadius={90}
              onPress={() => navigation.navigate("PersonalRegister")}
            />
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default ChooseAccountType;
