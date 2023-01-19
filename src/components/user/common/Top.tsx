import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Bell, ArrowDown, LockOff, LockOn, Cross } from "../../svg";
import * as ImagePicker from "expo-image-picker";
import { openSwitchAccountBottomSheetOpen } from "../../../redux/features/user/userSlice";
import { useAppDispatch } from "../../../redux/store";
import { useNavigation } from "@react-navigation/native";

const Top = () => {
  const [lockOn, setLockOn] = useState(false);
  const [lockPopupVisible, setLockPopupVisible] = useState(false);
  const [image, setImage] = useState<string | undefined>(undefined);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const navigaion = useNavigation();

  //redux
  const dispath = useAppDispatch();

  const handleLock = () => {
    if (lockOn) {
      setLockOn(false);
      setLockPopupVisible(true);

      const timeout = setTimeout(() => {
        setLockPopupVisible(false);
      }, 5000);
      timeoutRef.current = timeout;
    } else {
      clearTimeout(timeoutRef.current);
      setLockOn(true);
      setLockPopupVisible(false);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePickImage = async () => {
    const galleryGrantedStatus =
      await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!galleryGrantedStatus.granted) {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (galleryStatus.granted) pickImage();
    } else {
      pickImage();
    }
  };

  return (
    <View className="h-[209px] bg-[#232637] rounded-b-[12px] ">
      <View className="flex-1" style={{ marginTop: 63 }}>
        <StatusBar barStyle="light-content" />

        <View className="relative items-center">
          {/* user name */}
          <Pressable
            className="flex-row items-center"
            onPress={() => dispath(openSwitchAccountBottomSheetOpen())}
          >
            <Text className="text-[14px] leading-[16.8px] font-bold text-white ">
              John
            </Text>
            <ArrowDown />
          </Pressable>

          {/* bell */}
          <Pressable
            className="absolute right-[14px]"
            onPress={() => navigaion.navigate("Notification")}
          >
            <Bell fill="#fff" />
            <View className="w-[11px] h-[11px] rounded-[5.5px] bg-[#D34040] justify-center items-center absolute">
              <Text className="text-[7px] leading-[8.4px] font-semibold text-white">
                1
              </Text>
            </View>
          </Pressable>
        </View>

        {/* lock */}
        <View className="mx-[14px] mt-3 relative items-end z-10">
          <Pressable onPress={handleLock}>
            {lockOn ? <LockOn /> : <LockOff />}
          </Pressable>
          {/* pop up */}
          {lockPopupVisible && (
            <View className="w-[116px] h-[52px] rounded-[10px] bg-[#404FD3] justify-center items-center absolute top-[100%] right-0">
              <Text className="text-[10px] leading-[12.4px] font-bold text-white">
                You have unlocked your account
              </Text>
            </View>
          )}
        </View>

        {/* user profile */}
        <View className="flex-1 mt-[14px] bg-[#222222]  relative ">
          <TouchableOpacity
            className="absolute w-[110px] h-[110px] rounded-[55px] left-1/2 bg-[#222222] justify-center items-center"
            style={{ transform: [{ translateX: -55 }, { translateY: -38 }] }}
            onPress={handlePickImage}
          >
            {image && (
              <Image
                source={{
                  uri: image,
                }}
                className="w-[90px] h-[90px] rounded-[45px]"
              />
            )}
            {!image && (
              <Image
                source={require("../../../../assets/images/user/defaultProfile.png")}
                className="w-[90px] h-[90px] rounded-[45px]"
              />
            )}
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
