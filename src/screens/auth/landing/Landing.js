import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Copyright, CustomButton } from "../../../components/auth";

const Landing = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <View className="flex-1 bg-[#232637]">
        <TouchableOpacity
          className="absolute top-[59px] right-[25px] z-10"
          onPress={() => console.log("skip login")}
        >
          <Text className="text-[20px] leading-[24px] font-black text-white">
            Skip
          </Text>
        </TouchableOpacity>

        <View className="mx-[30px] flex-1">
          <View>
            <Text className="text-[62px] leading-[93px] text-center font-extrabold text-white mt-[300px]">
              stomble
            </Text>
          </View>

          <View className="mt-[178px]">
            <CustomButton
              text="Sign in"
              onPress={() => console.log("to sign in screen")}
            />
          </View>

          <View className="flex-row justify-center mt-[14px]">
            <Text className="text-[15px] leading-[18px] font-normal text-white">
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChooseAccountType")}
            >
              <Text className="text-[15px] leading-[18px]  text-white font-bold">
                {" "}
                Register Now
              </Text>
            </TouchableOpacity>
          </View>

          <View className="absolute bottom-14 flex-row">
            <View className="flex-row flex-1 justify-center">
              <Copyright />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Landing;
