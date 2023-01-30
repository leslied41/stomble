import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import {
  HomeScreenTabProps,
} from "../../types/navigation";

import { ScreenLayout } from "../../components/common";
import { AccountsSettingsView, PreferencesView, SupportView } from "../../components/settings";


const Settings = ({ navigation }: HomeScreenTabProps<"Settings">) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [darkEnabled, setDarkEnabled] = useState<boolean>(true);
  const [PersonalInfoData, setPersonalInfoData] = useState<{}>({ firstName: 'Johnx', lastName: 'Sarkis' })


  const toggleDarkMode = () => {
    setDarkEnabled(!darkEnabled)
    toggleColorScheme()
  }

  return (
    <>
      <ScreenLayout header="Settings" goBack>
        <View className="py-6 flex-row align-center items-center">
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1785/1785888.png" }} className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: 'yellow' }} />
          <Text className="text-[18px] font-[400] text-white ml-4 leading-[22px]">John Sarkis</Text>
        </View>
        <View style={{ height: .7, backgroundColor: '#cacaca', }} className="mx-[-22px]" />
        <AccountsSettingsView />
        <View style={{ height: .7, backgroundColor: '#cacaca', }} className="mx-[-22px]" />
        <PreferencesView darkEnabled={darkEnabled} onPress={toggleDarkMode} />
        <View style={{ height: .7, backgroundColor: '#cacaca', }} className="mx-[-22px]" />
        <SupportView />
      </ScreenLayout>
    </>
  );
};

export default Settings;
