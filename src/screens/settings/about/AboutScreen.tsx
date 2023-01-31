import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { ScreenLayout } from '../../../components/common';
import { ArrowRight } from '../../../components/svg';
import { CommonScreenProps } from '../../../types/navigation';

const AboutScreen: FC<CommonScreenProps<"About">> = ({ navigation }) => {
    return (
        <ScreenLayout header='About'>
            <View className='py-[22px] gap-[21px]'>
                <Pressable onPress={() => navigation.navigate("PrivacyPolicy")} >
                    <View className="flex-row items-center justify-between">
                        <Text className="text-[18px] font-[700] leading-[22px] text-white">Privacy policy</Text>
                        <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]">{ }</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Terms")} >
                    <View className="flex-row items-center justify-between">
                        <Text className="text-[18px] font-[700] leading-[22px] text-white">Terms of use</Text>
                        <Text className="text-[14px] font-[400] text-[#ABABAB]  leading-[17px]">{ }</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("OpenSourceLibrary")} >
                    <View className="flex-row items-center justify-between">
                        <Text className="text-[18px] font-[700] leading-[22px] text-white">Open source libraries</Text>
                        <ArrowRight />
                    </View>
                </Pressable>
            </View>
        </ScreenLayout>
    )
}

export default AboutScreen