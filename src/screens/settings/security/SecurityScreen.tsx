import { View, Text, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import { ScreenLayout } from '../../../components/common';
import { ArrowRight } from '../../../components/svg';
import { PasswordInput } from '../../../components/auth';
import SettingInputBox from '../../../components/settings/SettingInputBox';
import { CommonScreenProps } from '../../../types/navigation';


const SecurityScreen: FC<CommonScreenProps<"Security">> = ({ navigation }) => {

    return (
        <ScreenLayout header='Security'>
            <Pressable onPress={() => navigation.navigate("CurrentPassword")} className="mt-[22px]">
                <View className="flex-row items-center justify-between">
                    <Text className="text-[18px] font-[700] leading-[22px] text-white">Change password</Text>
                    <ArrowRight />
                </View>
            </Pressable>
        </ScreenLayout>
    )
}

export default SecurityScreen