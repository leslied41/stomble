import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { FC, ReactNode, useState } from "react";
import { Bell, ArrowDown, LockOff, LockOn } from "../../svg";

type UserLayoutTypes = {
  children: ReactNode;
};

const UserLayout: FC<UserLayoutTypes> = ({ children }) => {
  const [lockOn, setLockOn] = useState(false);
  const [height, setHeight] = useState(0);
  return (
    <View className="flex-1 bg-[#232637]">
      <SafeAreaView
        className="flex-1"
        style={{ marginTop: Platform.OS === "android" ? 52 : 0 }}
      >
        <StatusBar barStyle="light-content" />
        <View className="relative items-center">
          {/* user name */}
          <TouchableOpacity className="flex-row items-center">
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

        <View
          className="flex-1 bg-[#000] realative mt-5"
          onLayout={(e) => {
            const { height: h } = e.nativeEvent.layout;
            setHeight(h);
          }}
        >
          {/* profile */}
          <View
            className="absolute w-[100px] h-[100px] rounded-[50px] bg-[#222222] z-10 left-1/2 justify-center items-center"
            style={{ transform: [{ translateX: -50 }, { translateY: -40 }] }}
          >
            <Image
              source={{
                uri: "https://static.wikia.nocookie.net/southpark/images/c/c2/Butters_%28Facebook%29.jpg/revision/latest/scale-to-width-down/720?cb=20101010032409",
              }}
              className="w-[80px] h-[80px] rounded-[40px]"
            />
          </View>

          <View className="h-[140px] w-full bg-[#232637] rounded-b-[12px]" />
          <View
            className="bg-[#222222] absolute left-[17px] right-[17px] rounded-t-[16px]"
            style={{ height: height }}
          >
            {children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UserLayout;
