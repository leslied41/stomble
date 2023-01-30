import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import ArrowRight from '../../components/svg/ArrowRight'
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '../../types/navigation';


type AccountsSettingsViewProps = {

}

const AccountsSettingsView: FC<AccountsSettingsViewProps> = ({ }) => {
    const navigation = useNavigation<HomeScreenNavigationProps<"Settings">>()
    return (
        <>
            <Text className=" mb-[26px] mt-[21px] font-[400] text-[18px] leading-[22px] text-[#ADADAD]">Accounts Settings</Text>
            <View className="gap-[20.6px] mb-[21px]">
                <Pressable onPress={() => navigation.navigate("PersonalInfo")}>
                    <View className="flex-row items-center justify-between">
                        <Text className=" font-[400] text-[18px] leading-[22px] text-white">Personal information</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Security")} >
                    <View className="flex-row items-center justify-between">
                        <Text className=" font-[400] text-[18px] leading-[22px] text-white">Security</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("SettingNotification")} >
                    <View className="flex-row items-center justify-between">
                        <Text className=" font-[400] text-[18px] leading-[22px] text-white">Notifications</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
            </View>
        </>
    )
}



export default AccountsSettingsView