import { View, Text, Button, Pressable } from "react-native";
import React, { FC, useState } from "react";
import { ScreenLayout, ToastBox } from "../../../components/common";
import { ArrowRight } from "../../../components/svg";

import ChangePhonePopUp from "./ChangePhonePopUp";
import SettingsModal from "./SettingsModal";
import ChangeEmailPopUp from "./ChangeEmailPopUp";
import { CommonScreenProps } from "../../../types/navigation";


const PersonalInfo: FC<CommonScreenProps<"PersonalInfo">> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalType, setModalType] = useState("");

  const [personalInfoData, setPersonalInfoData] = useState({
    firstName: "John",
    lastName: "Sarkis",
    gender: "Male",
    birthday: "19 August 1999",
    email: "ss",
    phone: "+61****234"
  })

  return (
    <>
      <ScreenLayout header="Personal information">
        <SettingsModal transparent={true} visible={modalVisible} dismiss={() => setModalVisible(false)}>
          {modalType === "phone" ? <ChangePhonePopUp dismiss={() => setModalVisible(false)} /> : <ChangeEmailPopUp dismiss={() => setModalVisible(false)} />}
        </SettingsModal>

        <View className="py-[22px] gap-[21px]">
          <Pressable onPress={() => navigation.navigate("FullName")} >
            <View className="flex-row items-center justify-between">
              <Text className="text-[18px] font-[700] leading-[22px] text-white flex-[.5]">Full name</Text>
              <View className="flex-row items-center flex-[.5] justify-between">
                <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]">{`${personalInfoData.firstName} ${personalInfoData.lastName}`}</Text>
                <ArrowRight />
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Gender")}>
            <View className="flex-row items-center justify-between">
              <Text className="text-[18px] font-[700] leading-[22px] text-white flex-[.5]">Gender</Text>
              <View className="flex-row items-center flex-[.5] justify-between">
                <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]">{personalInfoData.gender}</Text>
                <ArrowRight />
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Birthday")} >
            <View className="flex-row items-center justify-between">
              <Text className="text-[18px] font-[700] leading-[22px] text-white flex-[.5]">Birthday</Text>
              <View className="flex-row items-center flex-[.5] justify-between">
                <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]">{personalInfoData.birthday}</Text>
                <ArrowRight />
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => { personalInfoData.email === "" ? navigation.navigate("ChangeEmail", { title: 'Link Email Address' }) : setModalVisible(!modalVisible); setModalType("email") }}>
            <View className="flex-row items-center justify-between">
              <Text className="text-[18px] font-[700] leading-[22px] text-white flex-[.5]">Email</Text>
              <View className="flex-row items-center flex-[.5] justify-between">
                <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]">{personalInfoData.email}</Text>
                <ArrowRight />
              </View>
            </View>
          </Pressable>


          <Pressable onPress={() => { setModalType("phone"), setModalVisible(!modalVisible) }} >
            <View className="flex-row items-center justify-between">
              <Text className="text-[18px] font-[700] leading-[22px] text-white flex-[.5]">Phone number</Text>
              <View className="flex-row items-center flex-[.5] justify-between">
                <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]">{personalInfoData.phone}</Text>
                <ArrowRight />
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("DeleteAccount")} >
            <View className="flex-row items-center justify-between">
              <Text className="text-[18px] font-[700] leading-[22px] text-white flex-[.5]">Delete account</Text>
              <View className="flex-row items-center flex-[.5] justify-between">
                <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]"></Text>
                <ArrowRight />
              </View>
            </View>
          </Pressable>
        </View>
      </ScreenLayout>
      <ToastBox />
    </>
  );
};

export default PersonalInfo;
