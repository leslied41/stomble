import { View, Image } from "react-native";
import React from "react";
import { AuthLayout, CustomButton } from "../../../components/auth";

const ChooseAccountType = ({ navigation }) => {
  return (
    <AuthLayout header="Choose account type">
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
    </AuthLayout>
  );
};

export default ChooseAccountType;
