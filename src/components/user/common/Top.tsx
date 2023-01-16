import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Bell, ArrowDown, LockOff, LockOn, Cross } from "../../svg";
import { useNavigation } from "@react-navigation/native";

const Top = () => {
  const [lockOn, setLockOn] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="h-[209px] bg-[#232637] rounded-b-[12px] ">
      <View className="flex-1" style={{ marginTop: 63 }}>
        <StatusBar barStyle="light-content" />

        <View className="relative items-center">
          {/* user name */}
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.navigate("FullName")}
          >
            <Text className="text-[14px] leading-[16.8px] font-bold text-white ">
              John
            </Text>
            <ArrowDown />
          </TouchableOpacity>
          {/* bell */}
          <View className="absolute right-[14px]">
            <Bell fill="#fff" />
            <View className="w-[11px] h-[11px] rounded-[5.5px] bg-[#D34040] justify-center items-center absolute">
              <Text className="text-[7px] leading-[8.4px] font-semibold text-white">
                1
              </Text>
            </View>
          </View>
        </View>
        {/* lock */}
        <View className="mx-[14px] mt-3 items-end">
          <Pressable onPress={() => setLockOn(!lockOn)}>
            {lockOn ? <LockOn /> : <LockOff />}
          </Pressable>
        </View>

        <View className="flex-1 mt-[14px] bg-[#222222]  relative ">
          <TouchableOpacity
            className="absolute w-[110px] h-[110px] rounded-[55px] left-1/2 bg-[#222222] justify-center items-center"
            style={{ transform: [{ translateX: -55 }, { translateY: -38 }] }}
          >
            <Image
              source={{
                uri: "https://static.wikia.nocookie.net/southpark/images/c/c2/Butters_%28Facebook%29.jpg/revision/latest/scale-to-width-down/720?cb=20101010032409",
              }}
              className="w-[90px] h-[90px] rounded-[45px]"
            />
            <View className="w-[23px] h-[23px] rounded-[11.5px] bg-white justify-center items-center absolute right-0 bottom-[15%]">
              <Cross />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Top;
