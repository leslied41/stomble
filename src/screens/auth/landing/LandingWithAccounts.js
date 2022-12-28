import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import {
  Copyright,
  CustomButton,
  SavedAccounts,
} from "../../../components/auth";

const LandingWithAccounts = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className="bg-[#232637] flex-1">
        <View className="flex-1">
          <Text className="text-[36px] leading-[54px] font-extrabold text-[#E0E0E0] text-center mt-[84px]">
            stomble
          </Text>
          <View className="flex-row mt-[129px]">
            <SavedAccounts />
          </View>
          <View className="mt-40 mx-[30px]">
            <CustomButton text="Log In" />
          </View>
          <View className="flex-row justify-center mt-[33px]">
            <TouchableOpacity
              className="border-r-2 border-black/20 pr-4"
              onPress={() => navigation.navigate("Register")}
            >
              <Text className="text-[15px] leading-[18px] font-normal text-[#F9F9F9]">
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="pl-4">
              <Text className="text-[15px] leading-[18px] font-normal text-[#F9F9F9]">
                Use Other Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default LandingWithAccounts;
